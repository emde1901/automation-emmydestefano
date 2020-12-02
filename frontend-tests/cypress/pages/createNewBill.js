/// <reference types="cypress" />

const createBillButton ='h2 > .btn'
const priceInput = 'input'
const paidCheck='.checkbox'
const saveBill = '.blue'

function navigateToCreateBillPage(cy){
    cy.get(createBillButton).click()

}


function fillCreateBillForm(cy, newBill){
    cy.get(priceInput).type(newBill.price)
    cy.get(paidCheck).click()
    cy.get(saveBill).click()

}


module.exports ={
    navigateToCreateBillPage,
    fillCreateBillForm
}