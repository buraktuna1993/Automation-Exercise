// cypress/support/index.ts
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().its('document.readyState').should('eq', 'complete');
})

