describe('login page actions', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('/login');
    cy.url().should('include', '/login');
    cy.get('[formcontrolname="userName"]').as('username');
    cy.get('[formcontrolname="password"]').as('password');
  });
  it('connect and show a loader and logout', () => {
    cy.get('@username').type('204292');
    cy.get('@password').type('test');
    cy.get('form').submit()
      .then(() => {
        cy.get('[role="dialog"]').contains('Patienter');
      });
    cy.url()
      .should('include', '/home')
      .then(() => {
        /* global window */
        const userString = window.localStorage.getItem('token');
        expect(userString).to.be.a('string');
      });
    cy.get('ion-button').contains('D').click();
    cy.url().should('include', '/login');
    const userToken = window.localStorage.getItem('token');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(userToken).to.be.null;
  });
  it('not connect with wrong password. Show an error message', () => {
    cy.get('@username').type('204292');
    cy.get('@password').type('test1');
    cy.get('form').submit();
    cy.get('[role="alertdialog"]').contains('Erreur d\'authentification');
  });
});
