import HomePage from "../pages/HomePage";

describe('Booking-Wingo', function(){
    
    this.beforeEach(function(){
        
        cy.clearAllCookies()
        HomePage.visit();
        cy.get('#ibeTab').should('be.visible');
    })

    it("Click en destino", ()=>{
        cy.on('window:confirm', () => false);
        
        cy.get('#linkIbe').click({force: true});

        HomePage.getAirportOrigen().click({force: true});

        HomePage.selectAirportOrigen("BOG").click({force: true});

        HomePage.selectAirportDestino("CLO").click({force: true});

        HomePage.getPasajeros().click({force: true});

        HomePage.addPasajerosAdultos(1);

        HomePage.getPasajeros().click({force: true});

        cy.date(0,31)

        cy.wait(10000);
        cy.get('div.btn-search.bt-search').invoke('removeAttr','target').click({force: true});
    })
})
