import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './config.json';

export default defineConfig(({ mode }) => {
  let baseUrl;
  if (mode === 'development') {
    baseUrl = 'http://localhost:5173';
  } else if (process.env.VITE_BASE_URL) {
    baseUrl = process.env.VITE_BASE_URL;
  } else {
    baseUrl = config.Domain || process.env.URL || '';
  }

  const gaMeasurementId = process.env.GA_MEASUREMENT_ID || '';

  console.log('Vite environment:', process.env);
  console.log('Vite inject data:', {
    BASE_URL: baseUrl,
    GA_MEASUREMENT_ID: gaMeasurementId,
  });

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