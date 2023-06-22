class HomePage{

      visit() {
        return cy.visit("/");
      };

      getAirportOrigen(){
        return cy.get('.info-airport-origen .select div');
      };

      selectAirportOrigen(origen){
        return cy.get('li[data-cod=*ORG*]'.replace("*ORG*",`"${origen}"`));
      };

      selectAirportDestino(destino){
        return cy.get('ul#comboDestino>li[data-cod=*DST*]'.replace("*DST*",`"${destino}"`));
      };

      getPasajeros(){
        return cy.get('div#selectPasj');
      };

      addPasajerosAdultos(cantidad){
        for (let index = 0; index < cantidad; index++) {
          cy.get('.passenger:contains("Adultos") .plus').click({force: true});
        }
      };
    
}

module.exports = new HomePage();