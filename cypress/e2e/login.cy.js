import { SELECTORS } from '../support/selectors';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid credentials', () => {
    cy.fixture('test_data').then((test_data) => {
      cy.login(test_data.username, test_data.password);
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Login with invalid credentials', () => {
    cy.fixture('test_data').then((test_data) => {
      cy.login(test_data.username, test_data.invalidPassword);
      cy.get(SELECTORS.errorMessage).should('contain', 'Username and password do not match any user in this service')
    });
  });
});