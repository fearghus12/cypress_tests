
var category = ['Dom','Praca', 'Elektronika', 'Motoryzacja','Odzież','Nieruchomości','Usługi','Hobby']
var numbers = [2,3,4,5,6]

const expression   = /[ąćęłńóśźż]/gi;

const replacements = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
};

const replacePolishLetters = (text) => {
	return text.replace(expression, (letter) => replacements[letter]);
};



class addAdvertPage{


    elements ={
        advertTitle: () => cy.get('#advert-title'),
        advertPrice: () => cy.get('#advert-price'),
        advertDesc: () => cy.get('#advert-desc'),
        advertCategory: () => cy.get('.v-col-md-7 > .v-row > .v-col-sm-auto > .v-btn'),
        advertCancel: () => cy.get('#cancel-button'),
        advertAdd: () => cy.get('#save-button'),
        advertPreview: () => cy.get('.pa-2 > .align-center'),
        categoryApply: () => cy.get('.my-6 > .v-btn__content'),
        categoryDropdown: () => cy.get('.mdi-menu-down'),
        selectCategory: (cat) => cy.contains(cat),
        deleteCategory: () => cy.get('.mdi-close-circle'),
        urlCheck: (ca) => cy.url().should('include', '/dodaj?path='+ca),
        addedAdvertInfo: ()=> cy.contains('Szkic - Kiedy zakończysz edycję treści ogłoszenia, kliknij przycisk „Zgłoś do weryfikacji”.'),
        acceptCategory: ()=> cy.contains('Zastosuj'),
        wait: ()=> cy.wait(2000),
        image:()=> cy.get('.top-0'),
        imageMore:(i) => cy.get(':nth-child('+i+') > .relative > .wh-full'),
        googleMapText: ()=> cy.get('.v-col-sm'),
    }
    addAdvertBlank(){
        this.elements.advertAdd().should('be.disabled')
    }
    isAdvertAdded(){
        this.elements.addedAdvertInfo();
    }

    fillEssensialls(){
        this.elements.advertTitle().type('testing');
        this.elements.advertPrice().type('666');
        this.elements.advertDesc().type('kategorie');
        
    }
    advDone(){
        this.elements.advertAdd().click()
    }

    addAdvertOneCategory(){
        this.elements.advertCategory().click();
        
        for(var i in category){
            this.elements.wait()
            this.elements.categoryDropdown().click();
            this.elements.selectCategory(category[i]).click()
            this.elements.urlCheck(replacePolishLetters(category[i].toLowerCase()))                   
            this.elements.deleteCategory().click()
        }
    }
    randomCategory(){
        const random = Math.floor(Math.random() * category.length);
        this.elements.advertCategory().click();
        this.elements.categoryDropdown().click();
        this.elements.selectCategory(category[random]).click()
        this.elements.acceptCategory().click()
        this.elements.wait()

    }
    addAdvertWithoutCategory(){
        this.elements.advertTitle().type('testing');
        this.elements.advertPrice().type('666');
        this.elements.advertDesc().type('desc');
        this.elements.advertAdd().click()
        
    }
    // addImg(){
    //     var filepath = '/Users/jakubkorczynski/Downloads/samural dogo.jpeg'
    //     this.elements.image().click().selectFile(filepath)
    // }
    addMoreImg(){
        const random = Math.floor(Math.random() * numbers.length);
        var filepath = './cypress/fixtures/dogo.jpeg'
        this.elements.image().click().selectFile(filepath)
        for (let i=0; i< random; i++){
            this.elements.imageMore(numbers[i]).click().selectFile(filepath)
        }
       
    }

}


module.exports = new addAdvertPage();




