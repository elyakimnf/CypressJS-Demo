import { SELECTORS } from '../support/selectors';

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('test_data').then((test_data) => {
            cy.login(test_data.username, test_data.password);
            cy.url().should('include', '/inventory.html');
        });
    });

    it('Add 1 product to the cart', () => {
        // Add 1 item to cart
        cy.get(SELECTORS.addToCart).eq(0).click();          // Select the button with index 0

        // Click the shopping cart icon
        cy.get(SELECTORS.cartIcon).click();

        // Assert the cart have 1 item
        cy.get(SELECTORS.cartItems).should('have.length', 1);
    });

    it('Add 2 products to the cart', () => {
        // Add 2 product to the cart        
        cy.get(SELECTORS.addToCart).each(($el, index) => {  // Iterate the element that has been selected as per index
            if (index < 2) {                                // Checks if the current element's index is less than 2
                cy.wrap($el).click();                       // wraps the element into a Cypress object
            }
        });

        // Click the shopping cart icon
        cy.get(SELECTORS.cartIcon).click();

        // Assert the cart have 2 items
        cy.get(SELECTORS.cartItems).should('have.length', 2);
    });

    it('Add 3 products to the cart', () => {
        // Add 3 product to the cart 
        cy.get(SELECTORS.addToCart).each(($el, index) => {
            if (index < 3) {
                cy.wrap($el).click();
            }
        });

        // Click the shopping cart icon
        cy.get(SELECTORS.cartIcon).click();

        // Assert the cart have 3 items
        cy.get(SELECTORS.cartItems).should('have.length', 3);
    });

    it('Add 4 products to the cart', () => {
        // Add 4 product to the cart 
        cy.get(SELECTORS.addToCart).each(($el, index) => {
            if (index < 4) {
                cy.wrap($el).click();
            }
        });

        // Click the shopping cart icon
        cy.get(SELECTORS.cartIcon).click();

        // Assert the cart have 4 items
        cy.get(SELECTORS.cartItems).should('have.length', 4);
    });
});