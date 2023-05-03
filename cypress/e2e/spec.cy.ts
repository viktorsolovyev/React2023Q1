/// <reference types="cypress" />
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("should open and close modal", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('img[alt="Rick Sanchez"]').click();
    cy.wait(1000);
    cy.contains("Rick Sanchez");
    cy.get('[data-testid="close-button"]').click();
  });
  it("should menu links work", () => {
    cy.visit("/");
    cy.contains("About").click();
    cy.get("h1").should("contain", "About");
    cy.get("div").should("contain", "This is about page!");
    cy.url().should("include", "/about");
    cy.contains("Form").click();
    cy.get("h1").should("contain", "Forms");
    cy.url().should("include", "/forms");
    cy.contains("Home").click();
    cy.get("h1").should("contain", "Home");
    cy.get('input[type="search"]').should("be.visible");
  });

  it("Simple test", () => {
    expect(true).to.equal(true);
  });
});
