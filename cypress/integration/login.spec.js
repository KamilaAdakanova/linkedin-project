describe("Login with valid credentials", () => {
  it("visit home page", () => {
    cy.login();
  });

  it("accept all invitations", () => {
    cy.get("main#main").scrollTo("bottom", { ensureScrollable: false }).wait(3000);
    cy.get("main#main").scrollTo("bottom", { ensureScrollable: false }).wait(3000);
    cy.get("main#main").scrollTo("bottom", { ensureScrollable: false }).wait(3000);
    cy.get('button[id*="ember"][aria-label*="Accept"]').each((el) => cy.wrap(el).click({ force: true }));
  });
});
