import { baseUrl } from "../support";

class homePage {
    elements = {
        homeBtn: () => cy.get('.nav a[href=\'/\']'),
        productsBtn: () => cy.get('.nav a[href=\'/products\']'),
        cartBtn: () => cy.get('.nav a[href=\'/view_cart\']'),
        loginBtn: () => cy.get('.nav a[href=\'/login\']'),
        products: () => cy.get('.features_items .product-image-wrapper'),
        logoutBtn: () => cy.get('[href="/logout"]'),
        deleteAccountBtn: () => cy.get('[href="/delete_account"]'),
        accountDeletedMessage: () => cy.get('#form .row')
    };

    goto() {
        cy.visit(baseUrl);
        return this;
    }
    clickHomeBtn() {
        this.elements.homeBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickProductsBtn() {
        this.elements.productsBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickCartBtn() {
        this.elements.cartBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickLoginBtn() {
        this.elements.loginBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickLogoutBtn() {
        this.elements.logoutBtn().should('be.visible').click({ force: true });
        return this;
    }
    clickDeleteAccountBtn() {
        this.elements.deleteAccountBtn().should('be.visible').click({ force: true });
    }
    deleteAccountIfPresent() {
        cy.get('body').then(($body) => {
            if ($body.find('[href="/delete_account"]').length) {
                this.elements.deleteAccountBtn().click({ force: true });
                this.verifyAccountIsDeleted();
            }
        });
        return this;
    }
    selectRandomProduct() {
        this.elements.products().then(($products) => {
            const randomIndex = Cypress._.random(0, $products.length - 1);
            cy.wrap($products.eq(randomIndex))
                .find('.choose a')
                .first()
                .click({ force: true });
        });
        return this;
    }
    addRandomProductToCart() {
        this.elements.products().then(($products) => {
            const productCount = $products.length;
            const randomIndex = Math.floor(Math.random() * productCount);

            const selectedProduct = cy.wrap($products.eq(randomIndex));

            selectedProduct.trigger('mouseover');
            selectedProduct.find('.add-to-cart:nth-child(4)').click({ force: true })
            cy.wait(2000);
        })
        return this;
    }
    verifyHomePageIsVisible() {
        cy.url().should('equal', 'https://automationexercise.com/');
        return this;
    }
    verifyAccountIsDeleted() {
        this.elements.accountDeletedMessage()
            .should('be.visible')
            .and('contain.text', 'Your account has been permanently deleted!');
        return this;
    }
    verifyLogoutBtnDisplayed() {
        this.elements.logoutBtn().should('be.visible');
        return this;
    }
}

export default new homePage;