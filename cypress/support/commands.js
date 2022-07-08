// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "./page_object/loginPage";

const loginPage = new LoginPage();

Cypress.Commands.add("login", () => {
  cy.visit("/home").wait(1000);
  loginPage.emailField().type(Cypress.env("email"), { delay: 15 }).wait(1000);
  loginPage.passwordField().type(Cypress.env("password"), { delay: 15 }).wait(1000);
  loginPage.bTnSubmit().click().wait(1000);
  loginPage.emailField1().type(Cypress.env("email")).wait(1000);
  loginPage.passwordField1().type(Cypress.env("password")).wait(1000);
  loginPage.bTnSubmit1().click().wait(1000);
});
