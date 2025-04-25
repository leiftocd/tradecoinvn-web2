import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './config.json';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(({ mode }) => {
  let baseUrl;
  if (mode === 'development') {
    baseUrl = `http://${process.env.HOST_NAME || 'localhost'}:${process.env.PORT || '5173'}`;
  } else {
    baseUrl = process.env.VITE_BASE_URL || process.env.URL || config.Domain || '';
  }
  
  baseUrl = baseUrl.replace(/\/$/, '');

  const gaMeasurementId = process.env.GA_MEASUREMENT_ID || 'G-121313155';

  return {
    plugins: [
      react(),
      tailwindcss(),
      createHtmlPlugin({
        minify: true,
        template: 'index.html',
        inject: {
          data: {
            BASE_URL: baseUrl,
            GA_MEASUREMENT_ID: gaMeasurementId,
          },
          ejsOptions: {
            delimiter: '%'
          }
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: 'index.html',
      },
    },
    define: {
      'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(gaMeasurementId),
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
    },
  };
});