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

## Inför prod. Ändra alla URL:er till den riktiga domänen

För att applikationen ska peka på rätt domän när den är live,
följ dessa steg för att byta ut alla **`localhost:5173`** -referenser mot ditt faktiska domännamn.

### 1. public/robots.txt

- Uppdatera raden som pekar till `sitemap.xml`-filen:

`Sitemap: https://www.dinRiktigadomän.se/sitemap.xml`

### 2. src/sitemap/sitemap-generator.js

- Ändra `hostname` till din faktiska domän:

```js
const sitemap = new SitemapStream({ hostname: "http://www.dinRiktigadomän.se" });
```

### 3. /index.html

- Uppdatera Open Graph-taggarna och sitemap-länken:

```html
<link
  rel="sitemap"
  type="application/xml"
  title="Sitemap"
  href="http://www.dinRiktigadomän.se/sitemap.xml"
/>
<meta property="og:url" content="http://www.dinRiktigadomän.se/" />
```

- Structured Data (ld+json):

```json
"url": "https://www.dinRiktigadomän.se",
"logo": "https://www.dinRiktigadomän.se/logo.png"
```
