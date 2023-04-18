import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the homepage', () => {
  cy.visit('https://computer-database.gatling.io/computers')
})

Given('I click on Add a new computer button', () => {
  cy.get('#add').click();
})

Given('I search for {string}', (computer_name) => {
  cy.get('#searchbox').click().type(computer_name)
  cy.get('#searchsubmit').click()
})

Given('I click on computer with name {string}', (computer_name) => {
  cy.get('a').contains(computer_name).click();
})

Then('I should see the title {string}', (title) => {
  cy.title().should('eq', title)
})

Then('I am navigated to home page', () => {
  cy.url().then((url) => {
    expect(url).to.equal('https://computer-database.gatling.io/computers');
  });

})

Then('I verify success message is displayed', () => {
  cy.get('div').contains('has been created').should('be.visible');
})

Then('I verify delete message is displayed', () => {
  cy.get('div').contains('has been deleted').should('be.visible');
})

Then('I verify date validation message is displayed', () => {
  cy.get('span').contains('Failed to decode date').should('be.visible');
})


