describe("Tickets", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it("fills all the text inpu fields", () => {
    const firstName = "Eduardo";
    const lastName = "Moraes";
    const email = "eduardomoraes19@gmail.com";

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#requests").type("Social midia");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });

  it("select four tickets", () => {
    cy.get("#ticket-quantity").select("4");
  });

  it("select 'vip' ticket type", () => {
    cy.get("#vip").check();
  });

  it("select 'Social midia' checkbox", () => {
    cy.get("#social-media").check();
  });

  it("selects 'friend' and 'Social midia', then uncheck 'friend'", () => {
    cy.get("#friend").check();
    cy.get("#social-media").check();
    cy.get("#publication").check();
    cy.get("#friend").uncheck();
  });
});
