describe('Users list flow', () => {
  beforeEach(() => {
    localStorage.setItem('auth', 'QpwL5tke4Pnpja7X4');
    cy.intercept({ method: 'GET', url: '**users**' }).as('getUsers');
    cy.intercept({ method: 'PUT', url: '**users**' }).as('updateUsers');
  });

  it('Show the users list', () => {
    cy.visit('/list').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    expect(cy.get('button[name="logout-button"]'));

    cy.contains('George');
    cy.contains('Bluth');
  });

  it('Show user info modal and close', () => {
    cy.visit('/list').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    cy.get('.mat-mdc-menu-trigger').first().click();

    cy.contains('Info').click();

    cy.contains('Informações');
    cy.contains('Nome:');
    cy.contains('Email:');

    cy.get('[mat-dialog-close]').contains('Fechar').click();
  });

  it('Edit user info modal and close', () => {
    cy.visit('/list').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    cy.get('.mat-mdc-menu-trigger').first().click();

    cy.contains('Editar').click();

    cy.contains('Editar usuário');

    cy.get('input[name="first_name"]').clear().type('Teste');
    cy.get('input[name="last_name"]').clear().type('Nice');
    cy.get('input[name="email"]').clear().type('george.bluth@reqres.ina');

    cy.contains('Salvar').click();

    cy.get('.mat-mdc-menu-trigger').first().click();

    cy.contains('Info').click();

    cy.contains('Informações');
    cy.contains('Nome: Teste Nice');
    cy.contains('Email: george.bluth@reqres.ina');

    cy.get('[mat-dialog-close]').contains('Fechar').click();
  });

  it('Delete user', () => {
    cy.visit('/list').should(() => {
      expect(localStorage.getItem('auth')).not.null;
    });

    cy.wait('@getUsers');

    cy.get('.mat-mdc-menu-trigger').first().click();

    cy.contains('Excluir').click();

    cy.contains('Excluir usuário');

    cy.contains(/Deseja realmente excluir o usuário/i);

    cy.contains('Confirmar').click();
  });
});
