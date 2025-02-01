class RegisterPage {
    elements = {
        title: () => cy.get('.clearfix [type="radio"]'),
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        password: () => cy.get('#password'),
        day: () => cy.get('#days'),
        month: () => cy.get('#months'),
        year: () => cy.get('#years'),
        firstName: () => cy.get('#first_name'),
        lastName: () => cy.get('#last_name'),
        company: () => cy.get('#company'),
        address1: () => cy.get('#address1'),
        address2: () => cy.get('#address2'),
        country: () => cy.get('#country'),
        state: () => cy.get('#state'),
        city: () => cy.get('#city'),
        zipCode: () => cy.get('#zipcode'),
        phoneNumber: () => cy.get('#mobile_number'),
        createAccountBtn: () => cy.get('[data-qa=\'create-account\']'),
        accountCreatedMessage: () => cy.get('.row > div > p:nth-child(2)'),
        continueBtn: () => cy.get('[data-qa="continue-button"]'),
        enterAccountInformationText: () => cy.get('.login-form h2.title:nth-child(1)'),
        newsletterCheckBox: () => cy.get('#newsletter'),
        offersCheckBox: () => cy.get('#optin')
    }

    clickContinueBtn() {
        this.elements.continueBtn().click({ force: true });
        return this;
    }
    clickNewsletterCheckBox() {
        this.elements.newsletterCheckBox().click({ force: true });
        return this;
    }
    clickOffersCheckBox() {
        this.elements.offersCheckBox().click({ force: true });
        return this;
    }

    fillRegistrationForm() {
        cy.fixture('users.json').then((user) => {
            this.elements.title().should('be.visible').check(user.title);
            this.elements.password().should('be.visible').type(user.password);
            this.elements.day().should('be.visible').select(user.day);
            this.elements.month().should('be.visible').select(user.month);
            this.elements.year().should('be.visible').select(user.year);
            this.elements.firstName().should('be.visible').type(user.firstName);
            this.elements.lastName().should('be.visible').type(user.lastName);
            this.elements.company().should('be.visible').type(user.company);
            this.elements.address1().should('be.visible').type(user.address1);
            this.elements.address2().should('be.visible').type(user.address2);
            this.elements.country().should('be.visible').select(user.country);
            this.elements.state().should('be.visible').type(user.state);
            this.elements.city().should('be.visible').type(user.city);
            this.elements.zipCode().should('be.visible').type(user.zipCode);
            this.elements.phoneNumber().should('be.visible').type(user.phoneNumber);

            this.elements.createAccountBtn().should('be.visible').click({ force: true })
        })
        return this;
    }
    verifyAccountIsCreated() {
        this.elements.accountCreatedMessage()
            .should('be.visible')
            .and('contain.text', "Congratulations! Your new account has been successfully created!");
        return this;

    }
    verifyAccountInformationSectionIsVisible() {
        this.elements.enterAccountInformationText().should('be.visible');
        return this;
    }
    verifyNewsletterCheckBoxChecked() {
        this.elements.newsletterCheckBox().should('be.checked');
        return this;
    }
    verifyOffersCheckBoxChecked() {
        this.elements.offersCheckBox().should('be.checked');
        return this;
    }
}

export default new RegisterPage;