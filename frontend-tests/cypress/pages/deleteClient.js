/// <reference types="cypress" />

const lastClient= ':last-child > .action > img'
const lastClientDeleteButton=':last-child > .menu > :nth-child(2)'


function deleteNewClient(cy){
    cy.get(lastClient).click()
    cy.get(lastClientDeleteButton).click()
}


module.exports={
    deleteNewClient
}