// Extend Cypress to support the custom command
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to wait for the page to fully load
       */
      waitForPageLoad(): Chainable<any>;
    }
  }
}

// Define baseUrl globally
export const baseUrl: string = Cypress.config('baseUrl') || '';
