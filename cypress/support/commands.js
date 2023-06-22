Cypress.Commands.add('date',(departureDay=0,returnDay=0)=>{
    cy.get('.cont-calendar:not(.return-selected ) .valid').eq(departureDay).click({force: true})
    cy.get('.return-selected .valid').eq(returnDay).click({force: true})
})