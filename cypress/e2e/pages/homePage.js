
class homePage{

    elements ={


        loginBtn : () => cy.get('.justify-space-between > :nth-child(2) > .v-row > :nth-child(2) > .v-btn'),

        addAdvert : ()=> cy.get('.justify-space-between > :nth-child(2) > .v-row > :nth-child(3) > .v-btn'),

        searchCategory : ()=> cy.get('.justify-space-between > :nth-child(2) > .v-row > :nth-child(1) > .v-btn')
        
    }

    clickOnSignin(){

        this.elements.loginBtn().click()
    }
    clickOnAdvert(){
        this.elements.addAdvert().click()
    }
    clickOnSearch(){
        this.elements.searchCategory().click()
    }

}


module.exports = new homePage();