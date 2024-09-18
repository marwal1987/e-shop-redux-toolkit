# FakeStore

## Projektbeskrivning

FakeStore är en e-handelsapplikation som använder React, Redux Toolkit, Vite, och andra moderna teknologier för att skapa en snabb och responsiv shoppingupplevelse. Applikationen hämtar produkter från ett API och hanterar global state med Redux Toolkit.

## Använda paket

- **React**: Bibliotek för att bygga användargränssnitt.
- **Vite**: Byggverktyg som möjliggör snabb utveckling och byggning.
- **Redux Toolkit**: Hanterar global state management.
- **Axios**: För att göra HTTP-anrop till API.
- **React-Helmet-Async**: För dynamisk hantering av metadata som förbättrar SEO.
- **Sitemap**: Används för att generera sitemaps genom ett skript i `sitemap-generator.js`.

## Inför prod. Ändra URL:er

För att säkerställa att applikationen pekar på rätt domän när den är live, följ dessa steg för att byta ut alla **`localhost`** eller **`example.com`** -referenser mot ditt faktiska domännamn.

#### 1. public/robots.txt

- Uppdatera raden som pekar till `sitemap.xml`-filen:
  `Sitemap: https://www.dinRiktigadomän.se/sitemap.xml`

#### 2. src/sitemap/sitemap-generator.js

- Ändra `hostname` till din faktiska domän:

```js
const sitemap = new SitemapStream({ hostname: "http://localhost" });
```

#### 3. /index.html

- Uppdatera Open Graph-taggarna och sitemap-länken:

```html
<link
  rel="sitemap"
  type="application/xml"
  title="Sitemap"
  href="http://www.example.com/sitemap.xml"
/>
<meta property="og:url" content="http://www.example.com/" />
```

- Structured Data (ld+json): Ändra till din riktiga domän

```json

"url": "https://example.com",
"logo": "https://example.com/logo.png"
```
