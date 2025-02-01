import { faker } from '@faker-js/faker';

class loginPage {
    elements = {
        loginEmail: () => cy.get('[data-qa=\'login-email\']'),
        loginPassword: () => cy.get('[data-qa=\'login-password\']'),
        loginBtn: () => cy.get('[data-qa=\'login-button\']'),
        signupName: () => cy.get('[data-qa=\'signup-name\']'),
        signupEmail: () => cy.get('[data-qa=\'signup-email\']'),
        signupBtn: () => cy.get('[data-qa=\'signup-button\']'),
        newUserSignupMessage: () => cy.get('.signup-form')
    }
    loginToAccount() {
        cy.fixture('users').then((user) => {
            this.elements.loginEmail()
                .should('be.visible')
                .invoke('val', '')
                .type(user.registeredEmail, { force: true });

            this.elements.loginPassword()
                .should('be.visible')
                .invoke('val', '')
                .type(user.password, { force: true });

            this.elements.loginBtn()
                .should('be.visible')
                .click({ force: true });
        })
    }
    registerNewUser() {
        const randomName = faker.person.firstName();
        const randomEmail = faker.internet.email({firstName:randomName});
        
            this.elements.signupName()
                .should('be.visible')
                .invoke('val', '')
                .type(randomName, { force: true });

            this.elements.signupEmail()
                .should('be.visible')
                .invoke('val', '')
                .type(randomEmail, { force: true });

            this.elements.signupBtn()
                .should('be.visible')
                .click({ force: true });

    }
    verifySignupFormIsVisible() {
        this.elements.newUserSignupMessage().should('be.visible');
    }
}
export default new loginPage;