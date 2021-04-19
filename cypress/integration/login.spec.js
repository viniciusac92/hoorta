context("Login page", () => {
  it("logs in with valid credentials", () => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/login");

    cy.contains("Login");
    cy.contains("Home");
    cy.contains("Sobre nós");
    cy.contains("Entrar");

    cy.get('[type="text"]').type("junia@mail.com");
    cy.get('[type="password"]').type("123456");
    cy.get(".sc-gsDJrp").click();

    cy.contains("Produtores");
  });
});
