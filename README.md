## FakeStore med React/vite och Redux Toolkit

# TODOS:
## Installera paket:
`npm install sitemap react-helmet-async`

## SEO
- npm run generate-sitemap

## Meta taggar
- Lägg till på varje sida. T.ex:
```
import MetaTags from "../components/MetaTags";

const HomePage = () => (
  <>
    <MetaTags 
      title="Home - E-shop with Redux Toolkit" 
      description="Välkommen till vår fantastiska E-shop, byggd med React och Redux Toolkit." 
    />
    <HeroSection />
    {/* Resten av sidan */}
  </>
);

export default HomePage;
```
