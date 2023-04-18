import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the homepage', () => {
  cy.visit('https://computer-database.gatling.io/computers')
})

Then('I should see the title {string}', (title) => {
  cy.title().should('eq', title)
})

Given('I click on Add a new computer button', () => {
  cy.get('#add').click();
})

When('I enter {string} details of computer', (details)  => {
  if(details === "correct"){
    cy.get('#name').click().type("Shanawar Computer");
    cy.get('#introduced').click().type("2020-06-08");
    cy.get('#discontinued').click().type("2023-06-08");
    cy.get('#company').select('Amiga Corporation')
  }
})

When('I click on submit button', () => {
  cy.get('input[type="submit"]').click()
})

Then('I am navigated to home page', () => {
  cy.url().then((url) => {
    expect(url).to.equal('https://computer-database.gatling.io/computers');
  });

})

Then('I verify success message is displayed', () => {
  cy.get('strong').contains('Done').should('be.visible');

})


