// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000 ;
const HOST_NAME = process.env.HOST_NAME;
const URL = process.env.URL;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';
const GA_API_SECRET = process.env.GA_API_SECRET || '';

// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/:slug', async (req, res, next) => {
    const slug = req.params.slug;
    const htmlFile = path.join(__dirname, 'public', `${slug}.html`);

    if (fs.existsSync(htmlFile)) {

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
                                    page_title: `Page ${slug}`
                                }
                            }
                        ]
                    }
                );
                console.log(`GA event sent for ${slug}`);
            } catch (error) {
                console.error('Error sending GA event:', error.message);
            }
        }
        return res.sendFile(htmlFile);
    } else {
        return next();
    }
});

// Route fallback cho SPA (React)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, HOST_NAME, () => {
    console.log(`🚀 Server is running at ${HOST_NAME}:${PORT}`);
});
