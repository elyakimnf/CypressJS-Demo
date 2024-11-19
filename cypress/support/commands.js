import { SELECTORS } from './selectors';

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get(SELECTORS.usernameInput).type(username);
    cy.get(SELECTORS.passwordInput).type(password);
    cy.get(SELECTORS.loginButton).click();
});
