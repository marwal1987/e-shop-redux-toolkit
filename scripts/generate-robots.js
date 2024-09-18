// scripts/generate-robots.js
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Skapa motsvarigheten av __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Kolla aktuell miljö
const isProduction = process.env.NODE_ENV === "production";

// Definera innehåll baserat på miljön
const robotsContent = isProduction
  ? `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://www.dinRiktigadomän.se/sitemap.xml`
  : `User-agent: *\nDisallow: /\nSitemap: http://localhost:5173/sitemap.xml`;

// Output sökvägen (vanligtvis public folder i Vite)
const outputPath = path.join(__dirname, "../public/robots.txt");

// Skriv robots.txt
writeFileSync(outputPath, robotsContent, "utf8");

console.log(
  `robots.txt has been generated for ${
    isProduction ? "production" : "development"
  } environment`
);
