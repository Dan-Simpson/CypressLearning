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
    

   //Registration 
   it('test two', () => {
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    //cy.get('[data-testid="ref-code-or-invoice-checkbox-no"]').should('be.checked')
    cy.get(continuebutton).click();
    cy.get('[data-testid="first-name-input"]').type(firstname);
    cy.get('[data-testid="last-name-input"]').type(lastname);
    cy.get('[data-testid="email-input"]').type('samantha.alcumus+1607241318@gmail.com');
    cy.get('[data-testid="landline-number-input"]').type('01446585236');
    cy.get('[data-testid="mobile-number-input"]').type('07966665215');
    cy.get(continuebutton).click(); 
    
    //Page3 
    cy.wait(5000)
    cy.get('[data-testid="company-name-input"]').type('SamyCompanytest');
    cy.get('[data-testid="company-address-line-1-input"]').type('Line1');
    cy.get('[data-testid="company-address-line-2-input"]').type('Line2');
    cy.get('[data-testid="company-town-city-input"]').type('Line3');
    cy.get('[data-testid="company-county-input"]').type('county');
    cy.get('[data-testid="company-postcode-input"]').type('Po5 5de');
    cy.get('[data-testid="number-of-employees-input"]').type('170');
    cy.get('[data-testid="company-organisation-type-select-input"]').select('PARTNERSHIP');
    cy.get('[data-testid="company-year-of-incorporation-or-registration-year-input"]').type(2001);


  })

  //Registration page2
  /*it('test two', () => {
    cy.visit('https://safesupplier-registration-main.alcumusdev.net/')
    cy.get(continuebutton).click();
    cy.get('[data-testid="first-name-input"]').type(firstname);
    cy.get('[data-testid="last-name-input"]').type(lastname);
    cy.get('[data-testid="email-input"]').type('samantha.alcumus+1607241318@gmail.com');
    cy.get('[data-testid="landline-number-input"]').type('01446585236');
    cy.get('[data-testid="mobile-number-input"]').type('07966665215');
    cy.get(continuebutton).click(); 
    
  })*/
})