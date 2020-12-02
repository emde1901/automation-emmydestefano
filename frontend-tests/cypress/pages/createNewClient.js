/// <reference types="cypress" />

const createClientButton ='h2 > .btn'
const nameInput =':nth-child(1) > input'
const emailInput=':nth-child(2) > input'
const telephoneInput=':nth-child(3) > input'
const saveClient='.blue'


function navigateToCreateClientPage(cy){
    cy.get(createClientButton).click()

}


function fillCreateClientForm(cy, newClient){
    cy.get(nameInput).type(newClient.name)
    cy.get(emailInput).type (newClient.email)
    cy.get(telephoneInput).type(newClient.telephone)
    cy.get(saveClient).click()

}

module.exports ={
    navigateToCreateClientPage,
    fillCreateClientForm
}