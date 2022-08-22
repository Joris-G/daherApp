describe('login page actions', () => {
  it('connect and show a loader', () => {
    cy.visit('login');
  });
  it('not connect with wrong password. Show an error message', () => {
    cy.visit('/');
  });
});
