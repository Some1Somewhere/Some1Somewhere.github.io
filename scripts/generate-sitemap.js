const fs = require('fs');
const path = require('path');

// Function to extract project titles from content_option.js
function extractProjectTitles() {
  const contentOptionPath = path.join(__dirname, '..', 'src', 'content_option.js');
  const content = fs.readFileSync(contentOptionPath, 'utf8');
  
  // Use regex to extract all project titles
  const titleRegex = /projectTitle:\s*"([^"]+)"/g;
  const titles = [];
  let match;
  
  while ((match = titleRegex.exec(content)) !== null) {
    titles.push(match[1]);
  }
  
  return titles;
}

const projectTitles = extractProjectTitles();

const baseUrl = 'https://www.dhruvshetty.com'; // Update this if your domain is different
const date = new Date().toISOString().split('T')[0];

const generateUrl = (path, priority = '0.7', changefreq = 'monthly') => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${generateUrl('/', '1.0', 'monthly')}
  ${generateUrl('/about', '0.8', 'monthly')}
  ${generateUrl('/portfolio', '0.9', 'weekly')}
  ${projectTitles
    .map(title => generateUrl(`/portfolio/${title.toLowerCase().replace(/\s+/g, '-')}`))
    .join('')}
  ${generateUrl('/resume', '0.7', 'monthly')}
  ${generateUrl('/contact', '0.6', 'yearly')}
</urlset>`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully!');