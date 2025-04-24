// generateHTML.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const seoData = require('./src/seoData');

const outputDir = path.join(__dirname, 'public');
const templatePath = path.join(__dirname, 'templates', 'template.html');
const baseDomain = process.env.URL;
const imageUrl = `${baseDomain}/bannerLeft.png`;
// Biến GA có thể để trống
const gaMeasurementId = process.env.GA_MEASUREMENT_ID || '{{GA_MEASUREMENT_ID}}';

const rawTemplate = fs.readFileSync(templatePath, 'utf8');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
Object.entries(seoData).forEach(([slug, data]) => {
    const htmlContent = rawTemplate
        .replace(/{{TITLE}}/g, data.title)
        .replace(/{{DESCRIPTION}}/g, data.description)
        .replace(/{{IMAGE}}/g, imageUrl)
        .replace(/{{URL}}/g, `${baseDomain}/${slug}`)
        .replace(/{{REDIRECT_URL}}/g, data.url)
        .replace(/{{SLUG}}/g, slug)
        .replace(/{{GA_MEASUREMENT_ID}}/g, gaMeasurementId);

    fs.writeFileSync(path.join(outputDir, `${slug}.html`), htmlContent, 'utf8');
    console.log(`✅ Created: ${slug}.html`);
});