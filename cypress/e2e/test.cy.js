describe('Cypress learning', () => {

  it('test one', () => {
    const firstName = 'Bob'
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get('[data-testid="continue-button"]').click();
    cy.get('[id="firstName"]').type(firstName);
  })

  it('test two', () => {
    const firstName2 = 'Dan'
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get('[data-testid="continue-button"]').click();
    cy.get('[id="firstName"]').type(firstName2);
  })

  // it('test three', () => {
  //   cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
  //   cy.get('[data-testid="continue-button"]').click();
  //   cy.get('[id="firstName"]').type(firstName);
  // })
})