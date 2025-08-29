describe("Tickets", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  const firstName = "Eduardo";
  const lastName = "Moraes";
  const email = "eduardomoraes19@gmail.com";

  it("fills all the text inpu fields", () => {
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

  it("Has 'TICKETBOX' header's heading", () => {
    cy.get("header h1").should("contain", "TICKETBOX");
  });

  it("alerts on invalid email", () => {
    cy.get("#email").as("email").type("eduardomoraes-01gmail.com");

    cy.get("#email.invalid").should("exist");

    cy.get("@email").clear().type("eduardodev19@gmail.com");

    cy.get("#email.invalid").should("not.exist");
  });

  it("fills and reset before", () => {
    const firstName = "Eduardo";
    const lastName = "Moraes";
    const email = "eduardomoraes19@gmail.com";
    const fullName = `${firstName} ${lastName}`;

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#ticket-quantity").select("4");
    cy.get("#vip").check();
    cy.get("#social-media").check();
    cy.get("#requests").type("IPA beer");
    cy.get("#agree").check();

    cy.get(".agreement p").should(
      "contain",
      `I, ${fullName}, wish to buy 4 VIP tickets`
    );

    cy.get("#agree").check();
    cy.get("#signature").type(fullName);

    cy.get("button[type='submit']")
      .as("submitButton")
      .should("not.be.disabled");

    cy.get("button[type='reset']").click();

    cy.get("@submitButton").should("be.disabled");
  });

  it("fills mandatory fields using support command", () => {
    const customer = {
      firstName: "Eduardo",
      lastName: "Moraes",
      email: "eduardomoraes19@gmail.com",
    };

    cy.fillMandatoryFields(customer);

    cy.get("button[type='submit']")
      .as("submitButton")
      .should("not.be.disabled");

    cy.get("#agree").uncheck();

    cy.get("@submitButton").should("be.disabled");
  });
});
