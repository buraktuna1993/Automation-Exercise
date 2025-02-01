class cartPage {
    elements = {
        quantityProduct: () => cy.get('.cart_quantity button'),
        proceedToCheckoutBtn: () => cy.get('a.check_out'),
        deleteBtn: () => cy.get('.cart_quantity_delete'),
        productImage: () => cy.get('#product-1 img'),
        emptyCardMessage: () => cy.get('#empty_cart'),
        loginBtn: () => cy.get('.text-center [href="/login"]'),
        cartInfo: () => cy.get('#cart_info')
    }
    waitToCartPageLoaded() {
        this.elements.productImage().should('be.visible');
        return this;
    }
    clickProceedToCheckoutBtn() {
        this.elements.proceedToCheckoutBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickLoginBtn() {
        this.elements.loginBtn().should('be.visible').click({ force: true });
        return this;
    }
    changeQuantityOfProduct(quantity: number) {
        this.elements.quantityProduct()
            .should('be.visible')
            .invoke('val', '')
            .type(`${quantity}`)
            .blur();
        return this;
    }

    deleteProductFromCart() {
        this.elements.deleteBtn().trigger('mouseover').click({ force: true });
        cy.wait(1000);
        return this;
    }
    verifyCartPageDisplayed() {
        cy.url().should('include', 'view_cart');
        return this;
    }
    verifyCartIsEmpty() {
        this.elements.emptyCardMessage().should('be.visible');
        return this;
    }
    verifyProductIsDisplayed(productName) {
        this.elements.cartInfo()
            .should('be.visible')
            .contains(productName);
        return this;
    }
}

export default new cartPage;