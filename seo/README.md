## OBS! Upplägget med en 'seo' katalog med filerna i, är till för lokala projekt. När man senare hostar webbplatsen, placeras filerna direkt i rotkatalogen

### sitemap.xml

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.example.com/</loc>
    <lastmod>2024-09-17</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>http://www.example.com/cart</loc>
    <lastmod>2024-09-17</lastmod>
    <priority>0.8</priority>
  </url>
    o.s.v.
</urlset>
```

### Förklaring `sitemap.xml`

- `<urlset>` Huvudbehållaren för alla URL:er som du vill inkludera i din sitemap
  - `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` anger att den officiella sitemaps-specifikationen används
- `<url>` innehåller information om en enskild sida på webbplatsen
- `<loc>` (location) anger den exakta URL:en för sidan som sökmotorer ska indexera. T.ex. http://www.example.com/cart
- `<lastmod>` anger när sidan senast uppdaterades, vilket hjälper sökmotorer att veta om sidan ska crawlas igen
- `<priority>` visar hur viktig denna sida är jämfört med andra sidor, värden mellan 0.0 och 1.0

## robots.txt

```
    User-agent: *
    Disallow: /private/
    Allow: /
    Sitemap: http://www.example.com/sitemap.xml
```

### Förklaring `robots.txt`

- Filen kontrollerar hur mycket av webbplatsen som sökmotorer får crawla.

- `User-agent: *` Detta betyder att reglerna gäller för alla sökmotorers crawlers, som Googlebot, Bingbot, etc.

- `Disallow: /private/` Instruerar crawlers att inte crawla eller indexera sidor i /private/-katalogen.

- `Allow: /` Tillåter crawlers att crawla hela webbplatsen, förutom de områden som specificeras med "Disallow".

- `Sitemap: http://www.example.com/sitemap.xml` Anger var sökmotorer kan hitta webbplatsens sitemap, som hjälper dem att förstå webbplatsens struktur.
