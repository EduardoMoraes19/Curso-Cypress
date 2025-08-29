describe("Tickets", () => {
  it.only("fills all the text inpu fields", () => {
    // Abre a página
    cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");

    const firstName = "Eduardo";
    const lastName = "Moraes";
    const email = "eduardomoraes19@gmail.com";

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#ticket-quantity").select("4");
    cy.get("#requests").type("Social midia");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });
});
