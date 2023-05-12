import React from "react";
import { mount } from "cypress/react18";

import AuthModal from "@/components/AuthModal/AuthModal";
import NavBar from "@/components/Navbar/NavBar";

describe("AuthModal test", () => {
  beforeEach(() => {
    let openModal: boolean = true;

    const handleModal = (value: boolean) => {
      openModal = value;
    };
    mount(
      <>
        {/* <NavBar /> */}
        <AuthModal
          onModalClose={() => handleModal(false)}
          modalOpen={openModal}
        />
      </>
    );
  });
  it("Switch state", () => {
    // cy.get("[data-cy=login]").click();
    cy.get("[data-cy=mode-changer]").click();
    cy.get("[data-cy=modal-title]").should("have.text", "Sign up");
  });
});
