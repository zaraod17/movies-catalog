import React from "react";
import NavBar from "./NavBar";

describe("Text on button", () => {
  it("Text on button", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />);
    cy.get("button").should("contain.text", "Login");
  });
});

describe("Log in", () => {
  it("Log in", () => {
    cy.mount(<NavBar />);
    cy.get("button").click();
    cy.get("button").should("contain.html", "img");
  });
});

describe("Log out", () => {
  it("Logging out", () => {
    cy.mount(<NavBar />);
    cy.get("button").click();
    cy.get("button").click();
    cy.contains("li", "Logout").click();
    cy.get("button").should("not.contain.html", "img");
  });
});
