describe('Register flow', () => {
  beforeEach(() => {
    cy.intercept({ method: 'POST', url: '**register' }).as('registerUser');
    cy.intercept({ method: 'GET', url: '**users**' }).as('getUsers');
  });

  it('Access from login screen', () => {
    cy.visit('/');
    cy.contains('Login');

    cy.contains(/Novo por aqui/i).click();

    expect(cy.contains('Cadastro'));

    expect(cy.get('input[name="email"]'));
    expect(cy.get('input[name="password"]'));
    expect(cy.get('input[name="confirmPassword"]'));
    expect(cy.get('button[type="submit"]'));
  });

  it('Success', () => {
    cy.visit('/register');
    cy.contains('Cadastro');

    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('input[name="confirmPassword"]').type('cityslicka');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerUser').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    cy.contains('George');
    cy.contains('Bluth');
  });

  it('Fail', () => {
    cy.visit('/register');
    cy.contains('Cadastro');

    cy.get('input[name="email"]').type('eve.holt@reqres.inn');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('input[name="confirmPassword"]').type('cityslicka');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerUser').should(() => {
      expect(localStorage.getItem('auth')).to.be.null;
    });

    cy.contains(/Note: Only defined users succeed registration/i);
  });
});
