describe('Login flow', () => {
  beforeEach(() => {
    cy.intercept({ method: 'POST', url: '**login' }).as('loginUser');
    cy.intercept({ method: 'GET', url: '**users**' }).as('getUsers');
  });

  it('Success', () => {
    cy.visit('/');
    cy.contains('Login');

    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginUser').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    expect(cy.get('button[name="logout-button"]'));

    cy.contains('George');
    cy.contains('Bluth');
  });

  it('Fail', () => {
    cy.visit('/');
    cy.contains('Login');

    cy.get('input[name="email"]').type('eve.holt@reqres.inn');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('button[type="submit"]').click();

    cy.contains(/user not found/i);
  });

  it('Login and logout', () => {
    cy.visit('/');
    cy.contains('Login');

    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input[name="password"]').type('cityslicka');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginUser').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    expect(cy.get('button[name="logout-button"]'));

    cy.contains('George');
    cy.contains('Bluth');

    cy.get('button[name="logout-button"]').click();
    cy.contains('Login').should(() => {
      expect(localStorage.getItem('auth')).to.be.null;
    });
  });
});
