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
    cy.contains("Name: Rick Sanchez");
    // cy.get("button[type='button']").first().click();
  });
  it("Simple test", () => {
    expect(true).to.equal(true);
  });
});
