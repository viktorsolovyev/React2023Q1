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
  it("Simple test", () => {
    expect(true).to.equal(true);
  });
});
