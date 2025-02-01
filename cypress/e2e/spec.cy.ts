import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage";
import orderDetailPage from "../pages/orderDetailPage";
import PDP from "../pages/PDP";
import PLP from "../pages/PLP";
import registerPage from "../pages/registerPage";

describe('New User', () => {
  beforeEach(() => {
    cy.visit("/");
  })
  afterEach(() => {
    homePage.deleteAccountIfPresent();
  })
  it('Test Case 1: Register a new user', () => {
    homePage.clickLoginBtn();

    loginPage.verifySignupFormIsVisible();
    loginPage.registerNewUser();

    registerPage.verifyAccountInformationSectionIsVisible()
      .clickNewsletterCheckBox()
      .clickOffersCheckBox()
      .verifyNewsletterCheckBoxChecked()
      .verifyOffersCheckBoxChecked()
      .fillRegistrationForm()
      .verifyAccountIsCreated()
      .clickContinueBtn();
  })
  it('Test Case 8: Verify All Products and product detail page', () => {
    homePage.clickProductsBtn();

    PLP.verifyAllProductsPageIsVisible()
      .verifyProductListVisible()
      .selectFirstProduct();

    PDP.verifyProductDetailPageIsVisible()
      .verifyProductInformationIsVisible();

  })
  it('Test Case 14: Place Order: Register while Checkout', () => {
    homePage.addRandomProductToCart()
      .clickCartBtn();

    cartPage.verifyCartPageDisplayed()
      .clickProceedToCheckoutBtn()
      .clickLoginBtn()

    loginPage.registerNewUser();
    registerPage.fillRegistrationForm().verifyAccountIsCreated().clickContinueBtn()

    homePage.verifyLogoutBtnDisplayed().clickCartBtn()
    cartPage.clickProceedToCheckoutBtn()

    checkoutPage.verifyDeliveryAddress()
      .addOrderComment('Place Order')
      .clickPlaceOrderBtn()
      .enterPaymentDetails()

    orderDetailPage.verifyOrderIsPlaced()
      .clickContinueBtn()
  })
  it('Test Case 20: Search Products and Verify Cart After Login', () => {
    const productName = 'Blue Top';

    homePage.clickProductsBtn()
    PLP.verifyAllProductsPageIsVisible()
      .searchProduct(productName)
      .verifySearchedProductsMessageIsVisible()
      .verifySearchedProductIsVisible(productName)
      .addFirstProductToCart()

    homePage.clickCartBtn()
    cartPage.verifyProductIsDisplayed(productName)

    homePage.clickLoginBtn()
    loginPage.loginToAccount()

    homePage.clickCartBtn()
    cartPage.verifyProductIsDisplayed(productName)
  })
  it('Test Case 23: Verify address details in checkout page', () => {
    homePage.verifyHomePageIsVisible()
      .clickLoginBtn()

    loginPage.registerNewUser();
    registerPage.fillRegistrationForm()
      .verifyAccountIsCreated()
      .clickContinueBtn()

    homePage.verifyLogoutBtnDisplayed()
      .addRandomProductToCart()
      .clickCartBtn()

    cartPage.verifyCartPageDisplayed()
      .clickProceedToCheckoutBtn()

    checkoutPage.verifyDeliveryAddress()
  })
  it('Test Case 24: Download Invoice after purchase order', () => {
    homePage.addRandomProductToCart()
      .clickCartBtn()

    cartPage.verifyCartPageDisplayed()
      .clickProceedToCheckoutBtn()
      .clickLoginBtn()

    loginPage.registerNewUser();
    registerPage.fillRegistrationForm()
      .verifyAccountIsCreated()
      .clickContinueBtn()

    homePage.verifyLogoutBtnDisplayed()
      .clickCartBtn()
    cartPage.clickProceedToCheckoutBtn()

    checkoutPage.verifyDeliveryAddress()
      .addOrderComment('Place Order')
      .clickPlaceOrderBtn()
      .enterPaymentDetails()

    orderDetailPage.verifyOrderIsPlaced()
      .downloadInvoice()
      .verifyInvoiceIsDownloaded()
      .clickContinueBtn()
  })
})
describe('Registered User', () => {

})

