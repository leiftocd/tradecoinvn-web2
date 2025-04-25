require('dotenv').config();
const fs = require('fs');
const path = require('path');
const seoData = require('./src/seoData');

const outputDir = path.join(__dirname, 'public');
const templatePath = path.join(__dirname, 'templates', 'template.html');
const baseUrl = process.env.VITE_BASE_URL || '';
const gaMeasurementId = process.env.GA_MEASUREMENT_ID || '';

console.log('Environment variables:', {
  VITE_BASE_URL: process.env.VITE_BASE_URL,
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
});

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const rawTemplate = fs.readFileSync(templatePath, 'utf8');

Object.entries(seoData).forEach(([slug, data]) => {
  const htmlContent = rawTemplate
    .replace(/{{TITLE}}/g, data.title)
    .replace(/{{DESCRIPTION}}/g, data.description)
    .replace(/{{URL}}/g, `${baseUrl}${slug}`)
    .replace(/{{REDIRECT_URL}}/g, data.url)
    .replace(/{{SLUG}}/g, slug)
    .replace(/{{BASE_URL}}/g, baseUrl)
    .replace(/{{GA_MEASUREMENT_ID}}/g, gaMeasurementId);

  fs.writeFileSync(path.join(outputDir, `${slug}.html`), htmlContent, 'utf8');
  console.log(`✅ Created: ${slug}.html`);
});