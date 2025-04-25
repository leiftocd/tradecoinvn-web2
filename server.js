require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';
const URL = process.env.VITE_BASE_URL || `http://${HOST_NAME}:${PORT}`;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || 'G-121313155';
const GA_API_SECRET = process.env.GA_API_SECRET || '';

console.log('Server environment:', {
  VITE_BASE_URL: process.env.VITE_BASE_URL,
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// Route cho trang chủ
app.get('/', (req, res) => {
  const htmlFile = path.join(__dirname, 'dist', 'index.html');
  let htmlContent = fs.readFileSync(htmlFile, 'utf-8');
  htmlContent = htmlContent
    .replace(/%BASE_URL%/g, URL)
    .replace(/%GA_MEASUREMENT_ID%/g, GA_MEASUREMENT_ID);
  res.send(htmlContent);
});

// Route cho các trang động
app.get('/:slug', async (req, res, next) => {
  const slug = req.params.slug;
  const htmlFile = path.join(__dirname, 'public', `${slug}.html`);

  if (fs.existsSync(htmlFile)) {
    let htmlContent = fs.readFileSync(htmlFile, 'utf-8');
    htmlContent = htmlContent
      .replace(/%BASE_URL%/g, URL)
      .replace(/%GA_MEASUREMENT_ID%/g, GA_MEASUREMENT_ID);

    if (GA_MEASUREMENT_ID && GA_API_SECRET) {
      try {
        await axios.post(
          `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
          {
            client_id: `server-${slug}`,
            events: [
              {
                name: `view_${slug}`,
                params: {
                  page_location: `${URL}/${slug}`,
                  page_title: `Page ${slug}`,
                },
              },
            ],
          }
        );
        console.log(`GA event sent for ${slug}`);
      } catch (error) {
        console.error('Error sending GA event:', error.message);
      }
    }

    return res.send(htmlContent);
  } else {
    return next();
  }
});

// Fallback cho SPA
app.get('*', (req, res) => {
  const htmlFile = path.join(__dirname, 'dist', 'index.html');
  let htmlContent = fs.readFileSync(htmlFile, 'utf-8');
  htmlContent = htmlContent
    .replace(/%BASE_URL%/g, URL)
    .replace(/%GA_MEASUREMENT_ID%/g, GA_MEASUREMENT_ID);
  res.send(htmlContent);
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`🚀 Server is running at ${URL}`);
});