import { SELECTORS } from '../support/selectors';


describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('test_data').then((test_data) => {
            cy.login(test_data.username, test_data.password);
            cy.url().should('include', '/inventory.html');
        });
    });

    it('Checkout item', () => {
        // Add 1 item to cart
        cy.get(SELECTORS.addToCart).eq(1).click();  // Select the add to cart button with index 1

        // Click the shopping cart icon
        cy.get(SELECTORS.cartIcon).click();
        cy.get(SELECTORS.cartItems).should('have.length', 1);   // Assert the cart have 1 item

        // Click the checkout button
        cy.get(SELECTORS.checkoutButton).click();
        cy.url().should('include', '/checkout-step-one.html');  // Assert user redirected to checkout step one page

        // User fill the checkout information
        cy.fixture('test_data').then((test_data) => {
            cy.get(SELECTORS.firstName).type(test_data.firstName);
            cy.get(SELECTORS.lastName).type(test_data.lastName);
            cy.get(SELECTORS.postalCode).type(test_data.postalCode);
        });

        // Click the continue button
        cy.get(SELECTORS.continueButton).click()
        cy.url().should('include', '/checkout-step-two.html');  // Assert user redirected to checkout step two page
        cy.get(SELECTORS.cartItems).should('have.length', 1);   // Assert the checkout overview have 1 item

        // Click the finish button
        cy.get(SELECTORS.finishButton).click();

        // Assert the success checkout message displayed
        cy.get(SELECTORS.successMessage).should('contain', 'Thank you for your order!')
        cy.wait(3000)

        // // User back to home/inventory page (optional)
        // cy.get(SELECTORS.backHomeButton).click()    
    });
});