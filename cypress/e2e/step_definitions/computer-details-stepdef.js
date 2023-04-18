import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

When('I enter {string} details of computer', (details) => {
  if (details === "correct") {
    cy.get('#name').click().type("Shanawar Computer");
    cy.get('#introduced').click().type("2020-06-08");
    cy.get('#discontinued').click().type("2023-06-08");
    cy.get('#company').select('Amiga Corporation')
  }
  if (details === "incorrect") {
    cy.get('#name').click().type("Shanawar Computer");
    cy.get('#introduced').click().type("May-06-08");
    cy.get('#discontinued').click().type("June-06-08");
    cy.get('#company').select('Amiga Corporation')
  }
})

When('I click on submit button', () => {
  cy.get('input[type="submit"]').click()
})

When('I click on delete button', () => {
  cy.get('input[value="Delete this computer"]').click({ force: true })
})

