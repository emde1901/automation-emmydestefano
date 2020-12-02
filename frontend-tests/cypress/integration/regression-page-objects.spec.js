/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as createNewRoom from '../pages/createNewRoom'
import * as createNewClient from '../pages/createNewClient'
import * as deleteClient from '../pages/deleteClient'
import * as createNewBill from '../pages/createNewBill'
import * as createNewReservation from '../pages/createNewReservation'


// test suite
describe(' Test suite', function(){ 

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview')

     })

    afterEach(() => {
       dashBoardFuncs.performLogout(cy, 'Login')
     })

        // Test case
    // it('Perform login and logout', function(){ 
    //     indexFuncs.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview')
    //     dashBoardFuncs.performLogout(cy, 'Login')

    // })

    it('Should create new room', function(){ 
        dashBoardFuncs.navigateToRooms(cy)
        createNewRoom.navigateToCreateRoomPage(cy)
        const newRoom = {
            roomType: 'twin', 
            roomNumber: '303',
            floor: '3',
            price: '2000',
            features: ['sea_view', 'penthouse'],
        }
        createNewRoom.fillCreateRoomForm(cy, newRoom)
        

    })

    it('Should create new client', function(){ 
        dashBoardFuncs.navigateToClients(cy)
        createNewClient.navigateToCreateClientPage(cy)
        const newClient = {
            name: 'Anna Carolina Larsson', 
            email: 'annaclarsson@gmaill.com',
            telephone: '0723023505',
        }
        createNewClient.fillCreateClientForm(cy, newClient)
        

    })

    it('Should delete new client', function(){ 
        dashBoardFuncs.navigateToClients(cy)
        deleteClient.deleteNewClient(cy)
        

    })


    it('Should create new bill', function(){ 
        dashBoardFuncs.navigateToBills(cy)
        createNewBill.navigateToCreateBillPage(cy)
        const newBill = {
            price: '2399', 
        
        }
        createNewBill.fillCreateBillForm(cy, newBill)
        

    })
        //DESSA ÄR FEL STARTDATE ENDADATE OSV 
    it('Should create new reservation', function(){ 
        dashBoardFuncs.navigateToReservations(cy)
        createNewReservation.navigateToCreateReservationPage(cy)
        const newReservation = { 
            startDate: '2020-12-05',
            endDate: '2020-12-09',
            client: '2',
            room: '3',
            bill: '',
        
        }
        createNewReservation.fillCreateNewReservationForm(cy, newReservation)
        

    })


})