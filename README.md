# FakeStore

## Projektbeskrivning

FakeStore är en e-handelsapplikation som använder React, Redux Toolkit, Vite, och andra moderna teknologier för att skapa en snabb och responsiv shoppingupplevelse. Applikationen hämtar produkter från ett API och hanterar global state med Redux Toolkit.

## Använda paket

- **React**: Bibliotek för att bygga användargränssnitt.
- **Vite**: Byggverktyg som möjliggör snabb utveckling och byggning.
- **Redux Toolkit**: Hanterar global state management.
- **Axios**: För att göra HTTP-anrop till FakeStore API.
- **React-Helmet-Async**: För dynamisk hantering av metadata som förbättrar SEO.
- **Sitemap**: Används för att generera sitemaps genom ett skript i `sitemap-generator.js`.

## Lazy loading - inbyggd eller `react-lazyload`

- Jag använder inbyggd lazy loading, vilket är tillräckligt i de flesta fall. 
```jsx
<img
  src={logoShopping}
  alt="logo"
  loading="lazy"
  className="w-6 rounded-full"
/>
```

Saker att överväga inför byte till `react-lazyloading`:

- Behöver du mer avancerade funktioner som tröskelvärden för när bilder laddas?
- Vill du använda platshållare under tiden bilder laddas?
- Behöver du detaljerad kontroll över hur och när innehåll laddas?

### Installera och implementera `react-lazyload`

`npm install react-lazyload`

```jsx
import LazyLoad from "react-lazyload";

<LazyLoad height={200}>
  <img src="path_to_large_image.jpg" alt="Beskrivning" />
</LazyLoad>;
```

## Inför prod. Ändra alla URL:er till den riktiga domänen

För att applikationen ska peka på rätt domän när den är live,
följ dessa steg för att byta ut alla **`localhost:5173`** -referenser mot ditt faktiska domännamn.

### 1. public/robots.txt

- Uppdatera raden som pekar till `sitemap.xml`-filen:

`Sitemap: https://www.dinRiktigadomän.se/sitemap.xml`

### 2. src/sitemap/sitemap-generator.js

- Ändra `hostname` till din faktiska domän:

```js
const sitemap = new SitemapStream({
  hostname: "http://www.dinRiktigadomän.se",
});
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

### 4. scripts/generate-robots.js

- Uppdatera till rätt domän:

`User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://www.dinRiktigadomän.se/sitemap.xml`
