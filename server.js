require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';
const URL = process.env.VITE_BASE_URL || `http://${HOST_NAME}:${PORT}`;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';
const GA_API_SECRET = process.env.GA_API_SECRET || '';

console.log('Server environment:', {
  URL: URL,
  VITE_BASE_URL: process.env.VITE_BASE_URL,
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist'), { 
  index: false 
}));

const processHtmlFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    let htmlContent = fs.readFileSync(filePath, 'utf-8');
    return htmlContent
      .replace(/%BASE_URL%/g, URL)
      .replace(/%GA_MEASUREMENT_ID%/g, GA_MEASUREMENT_ID);
  }
  return null;
};

app.get('/', (req, res) => {
  const htmlFile = path.join(__dirname, 'dist', 'index.html');
  const processedHtml = processHtmlFile(htmlFile);
  
  if (processedHtml) {
    if (GA_MEASUREMENT_ID && GA_API_SECRET) {
      try {
        axios.post(
          `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
          {
            client_id: 'server-index',
            events: [
              {
                name: 'view_index',
                params: {
                  page_location: URL,
                  page_title: 'Trang Chủ - TRADECOINVN',
                },
              },
            ],
          }
        );
        console.log('GA event sent for index page');
      } catch (error) {
        console.error('Error sending GA event:', error.message);
      }
    }
    
    return res.send(processedHtml);
  } else {
    return res.status(404).send('Index file not found');
  }
});

app.get('/:slug', async (req, res, next) => {
  const slug = req.params.slug;
  const htmlFile = path.join(__dirname, 'public', `${slug}.html`);
  const processedHtml = processHtmlFile(htmlFile);

  if (processedHtml) {
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

    return res.send(processedHtml);
  } else {
    return next();
  }
});

app.get('*', (req, res) => {
  const htmlFile = path.join(__dirname, 'dist', 'index.html');
  const processedHtml = processHtmlFile(htmlFile);
  
  if (processedHtml) {
    return res.send(processedHtml);
  } else {
    return res.status(404).send('Not found');
  }
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`🚀 Server is running at ${HOST_NAME}:${PORT}`);
});