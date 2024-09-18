// OBS! Här hanteras statiska rutter - EJ dynamiska. Dynamiska rutter hanteras i sitemap-generator.js
const routes = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/about", priority: 0.9, changefreq: "monthly" },
];

export default routes;
