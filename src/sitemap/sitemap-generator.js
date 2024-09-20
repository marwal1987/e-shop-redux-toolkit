import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import routes from "./sitemap-routes.js"; // Rutter
import axios from "axios";

async function generateSitemap() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  const sitemap = new SitemapStream({ hostname: "http://localhost:5173" });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  // Statiska sidor - Skapa manuellt
  // sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  // sitemap.write({ url: '/cart', changefreq: 'daily', priority: 0.8 });

  // Skapa sidor med forEach
  routes.forEach((route) => {
    sitemap.write({
      url: route.path,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  // Dynamiska produkt-URL:er
  products.forEach((product) => {
    sitemap.write({
      url: `/product/${product.id}`,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);
}

generateSitemap();
