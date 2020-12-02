/// <reference types="cypress" />

const createRoomButton = 'h2 > .btn'
const categoryInput =':nth-child(1) > select'
const numberInput =':nth-child(2) > input'
const floorInput=':nth-child(3) > input'
const availabilityCheck='.checkbox'
const priceInput=':nth-child(5) > input'
const roomFeatures=':nth-child(6) > select'
const saveRoom='.blue'


function navigateToCreateRoomPage(cy){
    cy.get(createRoomButton).click()

}


function fillCreateRoomForm(cy, newRoom){
    cy.get(categoryInput).select(newRoom.roomType)
    cy.get(numberInput).type(newRoom.roomNumber)
    cy.get(floorInput).type (newRoom.floor)
    cy.get(availabilityCheck).click()
    cy.get(priceInput).type(newRoom.price)
    cy.get(roomFeatures).select(newRoom.features)
    cy.get(saveRoom).click()

}

module.exports ={
    navigateToCreateRoomPage,
    fillCreateRoomForm
}
