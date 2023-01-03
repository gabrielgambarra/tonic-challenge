describe('General', () => {
  it("shouldn't be able to visit the list page", () => {
    cy.visit('/list').should(() => {
      expect(localStorage.getItem('auth')).to.be.null;
    });

    cy.url().should('include', '/login');
  });

  it("shouldn't be able to visit the login page", () => {
    localStorage.setItem('auth', 'QpwL5tke4Pnpja7X4');
    cy.visit('/login').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.url().should('include', '/list');
  });

  it("shouldn't be able to visit the register page", () => {
    localStorage.setItem('auth', 'QpwL5tke4Pnpja7X4');
    cy.visit('/register').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.url().should('include', '/list');
  });
});
