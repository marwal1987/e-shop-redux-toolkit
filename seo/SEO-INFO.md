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
   <!-- o.s.v. -->
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
Sitemap: http://www.example.com/seo/sitemap.xml
```

### Förklaring `robots.txt`

- Filen kontrollerar hur mycket av webbplatsen som sökmotorer får crawla.

- `User-agent: *` Detta betyder att reglerna gäller för alla sökmotorers crawlers, som Googlebot, Bingbot, etc.

- `Disallow: /private/` Instruerar crawlers att inte crawla eller indexera sidor i /private/-katalogen.

- `Allow: /` Tillåter crawlers att crawla hela webbplatsen, förutom de områden som specificeras med "Disallow".

- `Sitemap: http://www.example.com/sitemap.xml` Anger var sökmotorer kan hitta webbplatsens sitemap, som hjälper dem att förstå webbplatsens struktur.

## Mer om meta-taggar i modern SEO (lägg till i `<head>`)

# Meta Tags for Modern SEO

#### 1. `<meta charset="UTF-8" />`

- **Beskrivning:** Ställer in teckenkodningen för sidan. UTF-8 stöder ett brett spektrum av tecken.
- **Användning:** Detta är **nödvändigt** för alla webbsidor.

---

#### 2. `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

- **Beskrivning:** Gör sidan responsiv genom att justera bredden till enhetens bredd.
- **Användning:** Viktig för mobiloptimering och **relevant för SEO**.

---

#### 3. `<meta name="description" content="En kort beskrivning av sidans innehåll." />`

- **Beskrivning:** Visas som en sammanfattning i sökmotorernas resultat.
- **Användning:** **Viktig för SEO**, eftersom det påverkar klickfrekvens (CTR).

---

#### 4. `<meta name="keywords" content="nyckelord1, nyckelord2, nyckelord3" />`

- **Beskrivning:** Användes tidigare för SEO men är nu **föråldrad** och ignoreras av de flesta sökmotorer.
- **Användning:** Kan **uteslutas** från `<head>`.

---

#### 5. `<meta name="robots" content="index, follow" />`

- **Beskrivning:** Instruerar sökmotorer att indexera sidan och följa länkar.
- **Användning:** Standardvärdena är "index, follow", så det kan vara bra att inkludera för att säkerställa korrekt indexering. **Relevant för SEO**.

---

#### 6. `<link rel="canonical" href="https://www.example.com/" />`

- **Beskrivning:** Anger den primära versionen av en sida om det finns duplicerat innehåll.
- **Användning:** **Viktig för SEO**, särskilt om du har flera versioner av samma innehåll (t.ex. på olika URL:er).

---

#### 7. **Open Graph (OG) Tags** (för sociala medier)

- **Beskrivning:** Kontrollerar hur sidan visas när den delas på sociala medier som Facebook eller LinkedIn.
- **Användning:** Indirekt relevant för SEO då delningar kan öka trafik. Exempel:
  ```html
  <meta property="og:title" content="E-shop with Redux Toolkit" />
  <meta
    property="og:description"
    content="En fantastisk E-shop byggd med React och Redux Toolkit."
  />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com/" />
  ```

#### 8. `<meta property="twitter:card" content="summary_large_image" />` (för Twitter Cards)

- **Beskrivning:** Kontrollerar hur din sida visas när den delas på Twitter.
- **Användning:** Liknande Open Graph, indirekt relevant för SEO, eftersom det förbättrar presentationen när sidan delas.

---

#### 9. `<meta name="author" content="Ditt namn eller företag" />`

- **Beskrivning:** Visar vem som är ansvarig för innehållet på sidan.
- **Användning:** Kan vara bra för trovärdighet, men har ingen direkt SEO-påverkan.

---

#### 10. `<meta name="theme-color" content="#FFFFFF" />`

- **Beskrivning:** Anger webbläsarens gränssnitts färg på mobila enheter.
- **Användning:** Förbättrar användarupplevelsen men påverkar inte SEO direkt.

---

#### 11. `<link rel="alternate" hreflang="x" href="URL" />`

- **Beskrivning:** Viktig för flerspråkiga sidor, då den anger vilken språkversion som ska visas för användare i olika regioner.
- **Användning:** **Relevant för SEO** om du har flerspråkiga versioner av din webbplats, eftersom det undviker duplicerat innehåll och förbättrar användarupplevelsen.

---

#### 12. `<meta name="google-site-verification" content="..." />`

- **Beskrivning:** Används för att verifiera din webbplats med Google Search Console.
- **Användning:** Ingen direkt SEO-påverkan, men **viktig för att koppla till Google Search Console**, vilket ger dig insikter om webbplatsens prestanda i Google.

---

#### 13. `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`

- **Beskrivning:** Säkerställer att sidan renderas korrekt i äldre versioner av Internet Explorer.
- **Användning:** Äldre tagg, men fortfarande användbar för kompatibilitet och kan påverka användarupplevelsen.

---

#### 14. `<title>E-shop with Redux Toolkit</title>`

- **Beskrivning:** En av de viktigaste SEO-faktorerna. Varje sida bör ha en unik titel som korrekt beskriver innehållet.
- **Användning:** **Viktig för SEO**, påverkar sidans ranking och klickfrekvens i sökmotorresultat.

---

#### 15. `<meta name="googlebot" content="index, follow" />`

- **Beskrivning:** Instruerar Google hur sidan ska indexeras och om länkar på sidan ska följas, liknande `robots`-taggen.
- **Användning:** Specifik för Google, men fungerar på samma sätt som `robots`.

---

#### 16. **Structured Data (Schema.org)**

- **Beskrivning:** Strukturerad data hjälper sökmotorer att bättre förstå sidans innehåll och förbättrar synligheten genom "rich snippets" (t.ex. recensioner, produktinformation).
- **Användning:** **Mycket relevant för SEO** och bör implementeras med JSON-LD inom en `<script>`-tagg i `<head>`. Exempel:
  ```html
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "E-shop with Redux Toolkit",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png"
    }
  </script>
  ```

#### Rekommenderade meta-taggar att lägga till i `<head>`:

- `<meta charset="UTF-8" />`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- `<meta name="description" content="En kort beskrivning av sidans innehåll." />`
- `<meta name="robots" content="index, follow" />`
- `<link rel="canonical" href="https://www.example.com/" />
`
- `Open Graph Tags` (för sociala medier, om delning är viktigt)
- `<meta property="twitter:card" content="summary_large_image" />` (om optimering för Twitter är`viktigt)
- `<title>E-shop with Redux Toolkit</title>`
- `Structured Data` (Schema.org) - för att förbättra synligheten med rich snippets
