describe('Cypress learning', () => {
     
    const firstname = 'Samy';
    const lastname = 'Proooo';
    const continuebutton = '[data-testid="continue-button"]'
    

    //Page 1 error validation
    it('test one', () => {
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get(continuebutton).click();
    cy.wait(5000)
    cy.get(continuebutton).click();
    cy.get('[data-testid="first-name-input-error"]').should('have.text','This field is required');
    cy.get('[data-testid="last-name-input-error"]').should('have.text','This field is required');
    cy.get('[data-testid="email-input-error"]').should('have.text','This field is required');
    cy.get('[data-testid="landline-number-input-error"]').should('have.text','This field is required');
    cy.get('[data-testid="mobile-number-input-error"]').should('have.text','This field is required');
    })
    

   //Registration page1
   it('test two', () => {
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get(continuebutton).click();
    cy.get('[data-testid="first-name-input"]').type(firstname);
    cy.get('[data-testid="last-name-input"]').type(lastname);
    cy.get('[data-testid="email-input"]').type('samantha.alcumus+1607241318@gmail.com');
    cy.get('[data-testid="landline-number-input"]').type('01446585236');
    cy.get('[data-testid="mobile-number-input"]').type('07966665215');
    cy.get(continuebutton).click(); 
    
  })

  //Registration page1
  it('test two', () => {
    const firstname1 = 'Lola'
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get(continuebutton).click();
    cy.get('[data-testid="first-name-input"]').type(firstname1);
    cy.get('[data-testid="last-name-input"]').type(lastname);
    cy.get('[data-testid="email-input"]').type('samantha.alcumus+1607241318@gmail.com');
    cy.get('[data-testid="landline-number-input"]').type('01446585236');
    cy.get('[data-testid="mobile-number-input"]').type('07966665215');
    cy.get(continuebutton).click(); 
    
  })
})