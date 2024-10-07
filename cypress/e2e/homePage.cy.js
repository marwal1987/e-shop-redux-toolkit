describe("Test av HomePage", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/products", { fixture: "products.json" }).as(
      "getProducts"
    );
    cy.visit("http://localhost:5173/");
  });

  context("hero sektion", () => {
    it("Ska visa herosektionen", () => {
      cy.get("h1")
        .should("exist")
        .contains("WELCOME TO MY FAKE E-STORE WEBSITE");
      cy.get("p")
        .should("exist")
        .contains("Try it out! Start by adding products to the cart!");
    });
  });

  context("All Products sektion", () => {
    it("Ska visa rubrik och produkter", () => {
      cy.wait("@getProducts");
      cy.get("h2").should("exist").contains("All Products");
      cy.get("article").should("exist").should("have.length", 20); ;
      cy.get("article a").should("exist");
      cy.get("article a img").should("exist");
      cy.get("article h3").should("exist");
      cy.get("article p").should("exist");
      cy.get("article button").should("exist");
    });
  });
});

