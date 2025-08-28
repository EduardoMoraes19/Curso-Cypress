describe("Tickets", () => {
  it("should display the 'TICKETBOX' heading", () => {
    // Abre a página
    cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");

    cy.get("h1").should("contain.text", "TICKETBOX");
  });
});
