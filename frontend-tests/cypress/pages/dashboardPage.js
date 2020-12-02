
/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewRoomButton =':nth-child(1) > .btn'
const viewClientsButton ='.blocks > :nth-child(2) > .btn'
const viewBillsButton ='.blocks > :nth-child(3) > .btn'
const viewReservationsButton ='.blocks > :nth-child(4) > .btn'

//actions / functions

function checkTitleOfDashboardPage(cy){
   cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function navigateToRooms(cy){
    cy.get(viewRoomButton).click()
}
function navigateToClients(cy){
    cy.get(viewClientsButton).click()
}

function navigateToBills(cy){
    cy.get(viewBillsButton).click()
}

function navigateToReservations(cy){
    cy.get(viewReservationsButton).click()
}
// export
module.exports = {
    checkTitleOfDashboardPage, 
    performLogout,
    navigateToRooms, 
    navigateToClients,
    navigateToBills,
    navigateToReservations

}
