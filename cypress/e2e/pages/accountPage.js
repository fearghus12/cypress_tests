
class accountPage {


    elements = {
        logoutBtn: () => cy.contains('Wyloguj'),
        categoryList: (cat) => cy.get('.overflow-x-scroll').contains(cat),
        filtryBtn: () => cy.contains('Filtry'),
        sortBox: () => cy.get('.v-col-3 > :nth-child(1) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input'),
        sortBoxPossibilities: (sort) => cy.contains(sort),
        cheapestAdv: () => cy.get('[href="/ogloszenie/bcZm-Z1Hki5c"] > .pa-2 > .align-center > .v-col.truncate'),
        test: () => cy.get('.v-col-sm-12 .rounded-lg > .v-row'),
        minPrice: () => cy.get('.my-4 > :nth-child(2) > .v-row > :nth-child(1) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input'),
        maxPrice: () => cy.get('.my-4 > :nth-child(2) > .v-row > :nth-child(3) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input'),
        dataField: () => cy.get('.v-col-4 > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input'),
        sortBoxS: () => cy.get(':nth-child(1) > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down'),
        sortBoxSPossibilites: (x)=> cy.get('.v-list > :nth-child('+x+')')
    }
    clickOnCategory(cat) {
        this.elements.categoryList(cat).click()

    }

    clickOnLogout() {
        this.elements.logoutBtn().click()
    }

    sortingTesting(sort, first, last) {
        cy.window().then(win => {
            if (win.innerWidth > 1279) {
                this.elements.sortBox().click()
                this.elements.sortBoxPossibilities(sort).click()
                this.elements.test().first().contains(first)
                this.elements.test().last().contains(last)
            } else {
                this.elements.filtryBtn().click()
                this.elements.sortBoxS().click()
                this.elements.sortBoxSPossibilites(4).click()
                
            }


        })
    }
    priceMinMax() {
        cy.window().then(win => {
            if (win.innerWidth > 1279) {
                this.elements.sortBox().click()
                this.elements.sortBoxPossibilities('Cena: od najtańszych').click()
                this.elements.minPrice().type('100{enter}')
                this.elements.maxPrice().type('700{enter}')
                this.elements.test().first().contains('110')
                this.elements.test().last().contains('666')

            } else {
                this.elements.filtryBtn().click()
            }


        })

    }



}


module.exports = new accountPage();



