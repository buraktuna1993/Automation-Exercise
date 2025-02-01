class orderDetailPage {
    elements = {
        congratulationsMessage: () => cy.get('.row > div > p'),
        downloadInvoceBtn: () => cy.get('.row > div > a'),
        continueBtn: () => cy.get('[data-qa=\'continue-button\']')
    }
    clickContinueBtn() {
        this.elements.continueBtn().should('be.visible').click({ force: true });
        return this;
    }
    downloadInvoice() {
        this.elements.downloadInvoceBtn().should('be.visible').click({ force: true });
        return this;
    }
    verifyOrderIsPlaced() {
        this.elements.congratulationsMessage()
            .should('be.visible')
            .should('contain.text', 'Congratulations! Your order has been confirmed!');
        return this;
    }
    verifyInvoiceIsDownloaded() {
        cy.readFile("cypress/downloads/invoice.txt", { timeout: Cypress.config('defaultCommandTimeout') })
            .should('exist');
        return this;
    }
}
export default new orderDetailPage;