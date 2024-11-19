# Cypress Automation Project

This project contains automated test scripts for [SauceDemo](https://www.saucedemo.com/) using Cypress. 

---

## **Setup Instructions**
1. **Prerequisite**
   - Node.js (version 14.x or higher)
   - Git
2. **Install Dependencies**
   - Run the following command to install the dependencies, including Cypress:
     ```bash
     npm install
   - If Cypress isn't included in the package.json file, you can install it manually:
     ```bash
     npm install cypress --save-dev
4. **Run the tests**
   - Open Cypress Test Runner
     ```bash
     npx cypress open
   - Run All Tests Headlessly
     ```bash
     npx cypress run

---

## **Project Test**
1. **Login Tests**:
   - Valid and invalid login scenarios with assertions.

2. **Select Items**:
   - Adding 1, 2, 3, or 4 products to the cart with verification.

3. **Checkout Test**:
   - Complete workflow from login to checkout.

4. **Selectors File**:
   - Storage for element selectors.

---

## **Project Structure**

```plaintext
project-root/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js         # Login test scripts
│   │   ├── select_items.cy.js  # Add-to-cart test scripts
│   │   ├── checkout.cy.js      # End-to-end checkout test
│   ├── fixtures/
│   │   ├── test_data.json      # Test data storage
│   ├── support/
│   │   ├── commands.js         # Custom Cypress commands
│   │   ├── e2e.js              # Test configuration hooks
│   │   ├── selectors.js        # Storage for element selectors
├── .gitignore                  # Ignored files/folders
├── package.json                # Project dependencies
├── README.md                   # Project documentation

