// Det här är en testfil saveProductsData.cy.js filsökväg: cypress/e2e/saveProductsData.cy.js
// Som används för att hämta data från API och spara ner datat i en separat fil

// Hämta produkterna och spara ner i en products.json fil:
describe("Spara produktdata från API", () => {
  it("Ska hämta och spara produktdata från API", () => {
    // Intercepta det riktiga API-anropet
    cy.intercept('GET', '**/products').as('getProducts');
    cy.visit("http://localhost:5173/");

    // Vänta på att API-svaret kommer tillbaka
    cy.wait('@getProducts').then((interception) => {
      // Få tillgång till responsen
      const products = interception.response.body;

      // Spara produkterna som fixture (om du kör i Node.js eller CI-miljö kan du spara till en fil)
      cy.writeFile('cypress/fixtures/products.json', products);
    });
  });
});

// Hur du använder det:
// Kör detta test först när du vill uppdatera din products.json-fil med den senaste datan från API
//
// Använd fixture-filen (products.json) i dina andra tester, som du redan gör i dina context-tester.
// Här är ett exempel på hur du fortsätter att använda denna data i dina andra testfiler:

// Exempel på homePage.cy.js
// describe("Test av HomePage", () => {
//   beforeEach(() => {
//     // Intercepta GET-anropet till produkter och använd sparad data från en fixture-fil
//     cy.intercept('GET', '**/products', { fixture: 'products.json' }).as('getProducts');
    
//     // Besök applikationens hemsida
//     cy.visit("http://localhost:5173/");
//   });

//   context("All Products sektion", () => {
//     it("Ska visa rubrik och produkter", () => {
//       // Vänta på att produkterna har laddats via intercept
//       cy.wait("@getProducts");
      
//       // Kontrollera att produkterna och deras delar visas korrekt på sidan
//       cy.get("h2").should("exist").contains("All Products");
//       cy.get("article").should("exist");  // Kontrollera att artikel-elementen finns
//       cy.get("article a").should("exist");  // Kontrollera att länken finns i varje artikel
//       cy.get("article a img").should("exist");  // Kontrollera att bild finns
//       cy.get("article h3").should("exist");  // Kontrollera att produktens titel finns
//       cy.get("article p").should("exist");  // Kontrollera att produktens beskrivning finns
//       cy.get("article button").should("exist");  // Kontrollera att knappen finns
//     });
//   });
// });