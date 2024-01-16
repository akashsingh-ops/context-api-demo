// cypress/integration/app_spec.js

describe("Context API Demo App", () => {
  it("loads the app and changes data with the button", () => {
    // Visit the app
    cy.visit("http://localhost:3000");

    // Assert that the initial data is displayed
    cy.get("p").should("contain", "Initial Data");

    // Click the button to change the data
    cy.get("button").click();

    // Assert that the data is changed
    cy.get("p").should("contain", "New Data");
  });
});
