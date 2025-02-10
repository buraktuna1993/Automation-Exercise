Cypress TypeScript Automation Framework

Welcome to my Cypress TypeScript automation framework for testing the Automation Exercise web application. This repository contains a basic framework built from scratch along with automated test scripts that cover key user journeys.

Why Cypress & TypeScript?
Cypress was chosen for its modern, developer-friendly approach to end-to-end testing. Some of the key reasons include:

Built-in Waiting and Retry Mechanisms: Cypress automatically waits for elements to be ready, reducing the flakiness of tests.
Fast Feedback: Its real-time reloading and interactive test runner help catch issues quickly.
Easy Debugging: The clear error messages and stack traces make troubleshooting simple.
Great Ecosystem: With a rich plugin ecosystem and strong community support, it's easy to integrate with CI/CD pipelines and other tools.
TypeScript is used alongside Cypress because:

Static Type Checking: It helps catch errors early in the development process, leading to more robust and maintainable code.
Improved Readability and Maintainability: Type annotations and modern syntax make the test scripts easier to understand, especially in larger projects.
Better Tooling Support: Enhanced autocompletion and refactoring capabilities boost developer productivity.
Together, Cypress and TypeScript create a powerful combination that improves test reliability and overall project quality.

Framework Overview & Structure
The framework is organized to keep tests modular and maintainable. Below is a typical file structure:

```
/cypress
  ├── /fixtures           # Test data files
  ├── /integration        # Test scripts (organized by journey)
  │     ├── register.spec.ts
  │     ├── products.spec.ts
  │     ├── checkout.spec.ts
  │     └── searchAndCart.spec.ts
  ├── /plugins            # Cypress plugins configuration
  └── /support            # Custom commands and configurations
package.json
tsconfig.json
cypress.json
README.md
```

Setup Instructions
To set up and run the framework locally, follow these steps:

Clone the Repository
```
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```
Install Dependencies

```
npm install
```

Configure the Environment

Update the cypress.json file to set the base URL for your application:

```
{
  "baseUrl": "https://automationexercise.com"
}
```

Run Cypress

To launch the interactive Test Runner:

```
npx cypress open

```

To run tests in headless mode:

```
npx cypress run

```

Extend or Modify Tests

The tests are located under cypress/integration. You can add new tests or adjust existing ones as needed. Custom commands are available in the cypress/support folder.

Automated Test Journeys & Chosen Test Cases
The framework scripts key user journeys to ensure comprehensive coverage of the critical functionalities of the web application. Below are the six test cases that were chosen, along with the rationale behind each:


Test Case 1: Register a New User

Why?

This test verifies that new users can sign up successfully. User registration is the first critical step in any e-commerce platform and sets the stage for personalized experiences.



Test Case 8: Verify All Products and Product Detail Page

Why?

Ensuring that product listings and details display correctly is crucial for user trust and engagement. This test validates that users can view products and inspect details necessary for informed purchasing decisions.



Test Case 14: Place Order – Register while Checkout

Why?

Many users prefer to register during the checkout process. This test confirms that the application can handle registration and order placement simultaneously, ensuring a smooth transition from guest to registered user.



Test Case 20: Search Products and Verify Cart After Login

Why?

The search functionality is a key component of a positive shopping experience. This test also checks that the shopping cart retains items after a user logs in, ensuring no disruption in the purchasing process.



Test Case 23: Verify Address Details in Checkout Page

Why?

Accurate address details are essential for order fulfillment. This test ensures that the checkout page displays correct and consistent address information, minimizing the risk of delivery errors.



Test Case 24: Download Invoice after Purchase Order

Why?

Post-purchase, customers often need to download invoices for record-keeping. This test ensures that invoices are generated and downloadable, completing the order cycle and enhancing the overall user experience.



Mapping the Test Cases to User Journeys

These six test cases collectively cover four major user journeys:



User Registration & Onboarding:

Journey: Test Case 1 and Test Case 14 (Registration during checkout)

Goal: Ensure that both new registrations and in-flow registration work seamlessly.


Product Exploration:

Journey: Test Case 8

Goal: Validate that product listings and details are accurately displayed for a smooth browsing experience.


Shopping Cart & Checkout Process:

Journey: Test Case 20 and Test Case 23

Goal: Confirm that the search functionality works, the shopping cart persists across sessions, and address details are accurate at checkout.


Post-Purchase Verification:

Journey: Test Case 24

Goal: Validate that after a purchase, the user can download an invoice, ensuring complete and transparent order processing.


Each journey was chosen to simulate realistic user behaviors, from initial registration to the final invoice download, ensuring end-to-end validation of the critical e-commerce functionalities.

