/// <reference types="cypress" />

// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// actions / functions { }

function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)

}
// exports 
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}