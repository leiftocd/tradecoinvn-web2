import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './config.json';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig(({ mode }) => {
  // Special handling for Vercel
  const isVercel = !!process.env.VERCEL;
  const vercelUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : null;
  
  // Get base URL with proper fallbacks
  let baseUrl;
  if (mode === 'development') {
    baseUrl = `http://${process.env.HOST_NAME || 'localhost'}:${process.env.PORT || '5173'}`;
  } else if (isVercel && vercelUrl) {
    baseUrl = vercelUrl;
  } else {
    baseUrl = process.env.VITE_BASE_URL || process.env.URL || config.Domain || '';
  }
  
  // Remove trailing slash if present
  baseUrl = baseUrl.replace(/\/$/, '');

  const gaMeasurementId = process.env.GA_MEASUREMENT_ID || '';

  console.log('Vite build configuration:', {
    mode,
    isVercel,
    vercelUrl,
    baseUrl,
    gaMeasurementId,
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