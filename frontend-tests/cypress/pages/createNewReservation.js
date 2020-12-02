/// <reference types="cypress" />

const createReservationButton ='h2 > .btn'
const startDateInput =':nth-child(1) > input'
const endDateInput =':nth-child(2) > input'
const selectClient=':nth-child(3) > select'
const selectRoom=':nth-child(4) > select'
const selectBill=':nth-child(5) > select'
const saveReservationButton='.blue'


function navigateToCreateReservationPage(cy){
    cy.get(createReservationButton).click()

}
//DESSA ÄR FEL STARTDATE ENDADATE OSV 
function fillCreateNewReservationForm(cy, newReservation){
    cy.get(startDateInput).type(newReservation.startDate)
    cy.get(endDateInput).type(newReservation.endDate)
    cy.get(selectClient).select(newReservation.client)
    cy.get(selectRoom).select(newReservation.room)
    cy.get(selectBill).select(newReservation.bill)
    cy.get(saveReservationButton).click()
}

//Exports
module.exports ={
    navigateToCreateReservationPage,
    fillCreateNewReservationForm
}