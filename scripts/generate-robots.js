import { writeFileSync } from "fs";

// Kolla aktuell miljö
const isProduction = process.env.NODE_ENV === "production";

// Definera innehåll baserat på miljön
const robotsContent = isProduction
  ? `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://www.dinRiktigadomän.se/sitemap.xml`
  : `User-agent: *\nDisallow: /`;

// Skriver robots.txt till public-mappen (Vite)
writeFileSync("./public/robots.txt", robotsContent, "utf8");

console.log(
  `robots.txt har genererats för ${
    isProduction ? "production" : "development"
  }-miljön`
);
