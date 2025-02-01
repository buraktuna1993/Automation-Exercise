class checkoutPage {
    elements = {
        quantityProduct: () => cy.get('.cart_quantity'),
        comment: () => cy.get('.form-control'),
        placeOrderBtn: () => cy.get('a[href=\'/payment\']'),
        cardName: () => cy.get('[name=\'name_on_card\']'),
        cardNumber: () => cy.get('[name=\'card_number\']'),
        cvc: () => cy.get('[name=\'cvc\']'),
        expMonth: () => cy.get('[name=\'expiry_month\']'),
        expYear: () => cy.get('[name=\'expiry_year\']'),
        payAndConfirmOrderBtn: () => cy.get('#submit'),
        deliveryAddress: () => cy.get('#address_delivery'),
        billingAddress: () => cy.get('#address_invoice')
    }
    goto() {
        cy.visit('/checkout');
        return this;
    }
    clickPlaceOrderBtn() {
        this.elements.placeOrderBtn().should('be.visible').click({ force: true });
        return this;
    }
    addOrderComment(comment) {
        this.elements.comment().should('be.visible').click({ force: true }).type(comment);
        return this;
    }
    enterPaymentDetails() {
        cy.fixture('card.json').then((card) => {
            this.elements.cardName().should('be.visible').click({ force: true }).type(card.cardName);
            this.elements.cardNumber().should('be.visible').click({ force: true }).type(card.cardNumber);
            this.elements.cvc().should('be.visible').click({ force: true }).type(card.cvc);
            this.elements.expMonth().should('be.visible').click({ force: true }).type(card.expMonth);
            this.elements.expYear().should('be.visible').click({ force: true }).type(card.expYear);

            this.elements.payAndConfirmOrderBtn().should('be.visible').click({ force: true });
        })
        return this;
    }
    verifyDeliveryAddress() {
        cy.fixture('users').then((user) => {
            this.checkAddressDetails(this.elements.deliveryAddress(), user);
        })
        return this;
    }
    verifyBillingAddress() {
        cy.fixture('users').then((user) => {
            this.checkAddressDetails(this.elements.billingAddress(), user);
        })
        return this;
    }
    checkAddressDetails(addressElement, user) {
        addressElement.should('contain', user.address1);
        addressElement.should('contain', user.address2);
        addressElement.should('contain', user.country);
        addressElement.should('contain', user.state);
        addressElement.should('contain', user.zipCode);
        addressElement.should('contain', user.phoneNumber);
    }
}

export default new checkoutPage;