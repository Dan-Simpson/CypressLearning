describe('Cypress learning', () => {
  it('Example test written by Dan', () => {
    cy.visit('https://safesupplier-registration-prod.alcumus.com/')
    cy.get('[data-testid="continue-button"]').click();
    cy.get('[data-testid="continue-button"]').click();
    // cy.get('[data-testid="first-name-input-error"]').should('be.visible');
    cy.get('[data-testid="first-name-input-error"]', {timeout:5000}).should('have.text', 'This field is sdfdfs required');
    // cy.get('#firstName').type('Dan');
    // cy.get('#lastName').type('Simpson');
    // cy.get('#email').type('dfsfs@sdfdsfsf.com')
    // cy.get('#landlineNumber').type('01656741741')
    // cy.get('#mobileNumber-tel-input').type('7868 818349');
    // cy.get('[data-testid="continue-button"]').click();
    // cy.get('#companyName').type('efeffeffwefe')
    // cy.get('#companyAddressLine1').type('fsfdsfsdfds')
    // cy.get('#companyAddressLine1').type('sdfdsfdfdsfds')
    // cy.get('[data-testid="company-organisation-type-select-input"]').select('other')
  })

  it('test 2', () => {
    cy.visit('https://www.google.com')
  })
})