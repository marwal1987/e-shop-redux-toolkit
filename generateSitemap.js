import { writeFileSync } from 'fs';
import axios from 'axios';

async function generateSitemap() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Statiska sidor
  sitemap += `  <url>\n    <loc>http://localhost/</loc>\n    <lastmod>${
    new Date().toISOString().split("T")[0]
  }</lastmod>\n    <priority>1.0</priority>\n  </url>\n`;
  sitemap += `  <url>\n    <loc>http://localhost/cart</loc>\n    <lastmod>${
    new Date().toISOString().split("T")[0]
  }</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;

  // Dynamiska produkt-URL:er
  products.forEach((product) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>http://localhost/product/${product.id}</loc>\n`;
    sitemap += `    <lastmod>${
      new Date().toISOString().split("T")[0]
    }</lastmod>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;

  writeFileSync('./seo/sitemap.xml', sitemap);
}

generateSitemap();
