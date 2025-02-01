class PLP {
    elements = {
        products: () => cy.get('.features_items .product-image-wrapper'),
        title: () => cy.get('.features_items .title'),
        searchBox: () => cy.get('input#search_product'),
        searchBtn: () => cy.get('button#submit_search'),
    }

    searchProduct(productName) {
        this.elements.searchBox().should('be.visible').clear().type(productName);
        this.elements.searchBtn().should('be.visible').click({ force: true })
        return this;
    }
    selectFirstProduct() {
        this.elements.products().then(($products) => {
            cy.wrap($products.first())
                .should('have.length.greaterThan', 0).first()
                .find('.choose a').first().click({ force: true });
            cy.wait(2000);
        })
        return this;
    }
    addFirstProductToCart() {
        this.elements.products().then(($products) => {
            const selectedProduct = cy.wrap($products.first());

            selectedProduct.trigger('mouseover')
                .find('.add-to-cart:nth-child(4)').click({ force: true })
            cy.wait(2000);
        })
        return this;
    }
    verifyAllProductsPageIsVisible() {
        this.elements.title().should('be.visible').and('contain.text', 'All Products');
        return this;
    }
    verifyProductListVisible() {
        this.elements.products().should('be.visible').and('have.length.greaterThan', 0);
        return this;
    }
    verifySearchedProductsMessageIsVisible() {
        this.elements.title().should('be.visible').and('contain.text', 'Searched Products');
        return this;
    }
    verifySearchedProductIsVisible(productName: string) {
        this.elements.products().should('be.visible').contains(productName);
        return this;
    }

}

export default new PLP;