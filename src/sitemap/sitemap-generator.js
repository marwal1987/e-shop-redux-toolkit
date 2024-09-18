import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import routes from './sitemap-routes.js'; // Dina rutter

const sitemap = new SitemapStream({ hostname: 'https://example.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

routes.forEach(route => {
  sitemap.write({ url: route.path, changefreq: 'daily', priority: 0.8 });
});

sitemap.end();
streamToPromise(sitemap.pipe(writeStream));
