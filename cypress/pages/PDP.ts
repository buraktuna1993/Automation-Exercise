class PDP {
    elements = {
        addToCartBtn: () => cy.get('.cart'),
        quantityProduct: () => cy.get('#quantity'),
        productImage: () => cy.get('.view-product img', { timeout: 10000 }),
        reviewName: () => cy.get('#name'),
        reviewEmail: () => cy.get('#email'),
        reviewComment: () => cy.get('textarea#review'),
        reviewSubmitBtn: () => cy.get('#button-review'),
        viewCartBtn: () => cy.get('.text-center a[href="/view_cart"]'),
        productName: () => cy.get('.product-information > h2'),
        productCategory: () => cy.get('.product-information > p:nth-child(3)'),
        productPrice: () => cy.get('.product-information > span > span'),
        productAvailability: () => cy.get('.product-information').contains('Availability'),
        productCondition: () => cy.get('.product-information').contains('Condition'),
        productBrand: () => cy.get('.product-information').contains('Brand')
    }

    clickAddToCartBtn() {
        this.elements.addToCartBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickViewCartBtn() {
        this.elements.viewCartBtn().should('be.visible').click({ force: true });
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
    leaveReview(name, email, review) {
        this.elements.reviewName().should('be.visible').clear().type(name);
        this.elements.reviewEmail().should('be.visible').clear().type(email);
        this.elements.reviewComment().should('be.visible').clear().type(review);

        cy.wait(5000);
        this.elements.reviewSubmitBtn().should('be.visible').click({ force: true });
        return this;
    }
    verifyProductDetailPageIsVisible() {
        cy.url().should('include', 'product_details');
        return this;
    }
    verifyProductInformationIsVisible() {
        this.elements.productName().should('be.visible');
        this.elements.productCategory().should('be.visible');
        this.elements.productPrice().should('be.visible');
        this.elements.productAvailability().should('be.visible').and('contain.text', 'Availability');
        this.elements.productCondition().should('be.visible').and('contain.text', 'Condition');
        this.elements.productBrand().should('be.visible').and('contain.text', 'Brand');
        return this;
    }
}

export default new PDP;