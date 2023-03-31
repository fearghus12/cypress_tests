var invalidEmails = ['test@test.com','plainaddress', '#@%^%#$@#$@#.com', '@example.com', 'Joe Smith <email@example.com>', 'email.example.com', 'email@example@example.com', '.email@example.com', 'email.@example.com', 'email..email@example.com', 'あいうえお@example.com', 'email@example.com (Joe Smith)', 'email@example', 'email@-example.com', 'email@example.web', 'email@111.222.333.44444', 'email@example..com', 'Abc..123@example.com']
var invalidNames = [' ','1232344','!##!##','3133!#@$','asdf1244','sadaf!##','adda!@@231']
var invalidZipcodes = [' ','asdfg','a-asdf','as-asd','asd-sd','asdf-s','!@#$%','!-@!@!','!@-@!#','@!#-@!','@!#$-@','as-#@$','12345','1-2345','123-45','1234-5','123456','12-3456']
var invalidCity = [' ', '1234',"!@#@$",'212@$@','212acasda','casca%^&','asdafd34']
var invalidAddress = [' ', '1234', '!@#%#', '1213@#!$']
var invalidPhone = ['asdfsf','1131asdd','!@#@$!@','!@@$$asdd','!@!@313dsa']
var randomEmail = require('random-email');
class registerPage{
    

    elements ={
        acceptBoxBtn: ()=> cy.get('#accept'),
        notAcceptWorning: () => cy.get('.v-messages__message'),
        acceptTermsBtn: ()=> cy.get('#next-button'),
        userEmail: ()=> cy.get('#email'),
        userPassword: () => cy.get('#password'),
        userRepPassword: ()=> cy.get('#password-repeat'),
        registerNextBtn: () => cy.get('#button-next'),
        userFirstName: () => cy.get('#first-name'),
        userLastName: () => cy.get('#last-name'),
        userZipCode: () => cy.get('#zip-code'),
        userCity: () => cy.get('#city'),
        userAddress: () => cy.get('#address'),
        userPhone: () => cy.get('#phone'),
        registerDoneBth: () => cy.get('#register-button'),
        wait:()=> cy.wait(1000),
        valiMsg: () => cy.get('.v-messages__message'),
        valiFirstMsg: () => cy.get(':nth-child(1) > .v-input__details > .v-messages > .v-messages__message'),
        valiSecondMsg: () => cy.get(':nth-child(2) > .v-input__details > .v-messages > .v-messages__message'),
        valiThridMsg: () => cy.get(':nth-child(3) > .v-input__details > .v-messages > .v-messages__message'),
        valiFourthMsg: () =>cy.get(':nth-child(4) > .v-input__details > .v-messages > .v-messages__message'),
        valiFifthMsg: () => cy.get(':nth-child(5) > .v-input__details > .v-messages > .v-messages__message'),


    }

    verifyTerms(accept){
        if(accept === true){
         this.elements.acceptBoxBtn().click();
         this.elements.acceptTermsBtn().click();
         this.elements.wait();
         this.elements.acceptBoxBtn().click();
         this.elements.acceptTermsBtn().click();
        }else{
            this.elements.acceptTermsBtn().click();
            this.elements.notAcceptWorning().should('be.visible');
            this.elements.acceptBoxBtn().click();
            this.elements.acceptTermsBtn().click();
            this.elements.wait();
            this.elements.acceptTermsBtn().click();
            this.elements.notAcceptWorning().should('be.visible');
            this.elements.acceptBoxBtn().click();
            this.elements.acceptTermsBtn().click();

        }      
    }
    verifyEmail(){
        this.elements.registerNextBtn().click();
        this.elements.valiFirstMsg().should('be.visible');
        this.elements.valiSecondMsg().should('be.visible');
        this.elements.valiThridMsg().should('be.visible');
        this.elements.userPassword().type('qwerty');
        this.elements.userRepPassword().type('qwerty');
        for (var index in invalidEmails){
            this.elements.userEmail().type(invalidEmails[index]);
            this.elements.registerNextBtn().click()
            this.elements.valiFirstMsg().should('be.visible');
            this.elements.userEmail().clear();
        }
    }
    correctEmail(){

        this.elements.userEmail().type(randomEmail({ domain: 'test.com' }));
    }
    correctPassword(){
        this.elements.userPassword().type('asdfgh');
        this.elements.userRepPassword().type('asdfgh');
    }
    clickOnNextBtn(){
        this.elements.registerNextBtn().click();
    }
    verifyPassword(){
        this.elements.userPassword().type('asd');
        this.elements.userRepPassword().type('asd');
        this.elements.registerNextBtn().click();
        this.elements.valiMsg().should('be.visible');
        this.elements.userPassword().clear()
        this.elements.userRepPassword().clear()
        this.elements.userPassword().type('asdfgh');
        this.elements.userRepPassword().type('asd');
        this.elements.registerNextBtn().click();
        this.elements.valiSecondMsg().should('be.visible');
        this.elements.userPassword().clear()
        this.elements.userRepPassword().clear()
    }
    personalDataBlank(){
        this.elements.registerDoneBth().click()
        this.elements.valiFirstMsg().should('be.visible');
        this.elements.valiSecondMsg().should('be.visible');
        this.elements.valiThridMsg().should('be.visible');
        this.elements.valiFourthMsg().should('be.visible');
        this.elements.valiFifthMsg().should('be.visible');

    }
    firstNameValidation(){
        this.elements.userLastName().type('Kowlaski');
        this.elements.userZipCode().type('35-123');
        this.elements.userCity().type('Rzeszów');
        this.elements.userAddress().type('Adress 12');
        for(var i in invalidNames){
            this.elements.userFirstName().type(invalidNames[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userFirstName().clear();
        }

    }
    lastNameValidation(){
        this.elements.userFirstName().type('Tomek');
        this.elements.userZipCode().type('35-123');
        this.elements.userCity().type('Rzeszów');
        this.elements.userAddress().type('Adress 12');
        for(var i in invalidNames){
            this.elements.userLastName().type(invalidNames[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userLastName().clear();
        }

    }
    zipCodeValidation(){
        this.elements.userFirstName().type('Tomek');
        this.elements.userLastName().type('Kowlaski');
        this.elements.userCity().type('Rzeszów');
        this.elements.userAddress().type('Adress 12');
        for(var i in invalidZipcodes){
            this.elements.userZipCode().type(invalidZipcodes[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userZipCode().clear();
        }
    }
    cityValidation(){
        this.elements.userFirstName().type('Tomek');
        this.elements.userLastName().type('Kowlaski');
        this.elements.userZipCode().type('35-123');
        this.elements.userAddress().type('Adress 12');
        for(var i in invalidCity){
            this.elements.userCity().type(invalidCity[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userCity().clear();
        }
    }
    addressValidation(){
        this.elements.userFirstName().type('Tomek');
        this.elements.userLastName().type('Kowlaski');
        this.elements.userZipCode().type('35-123');
        this.elements.userCity().type('Rzeszów');
        for(var i in invalidAddress){
            this.elements.userAddress().type(invalidAddress[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userAddress().clear();
        }
    }
    phoneValidation(){
        this.elements.userFirstName().type('Tomek');
        this.elements.userLastName().type('Kowlaski');
        this.elements.userZipCode().type('35-123');
        this.elements.userCity().type('Rzeszów');
        this.elements.userAddress().type('Adress 12');
        for(var i in invalidPhone){
            this.elements.userPhone().type(invalidPhone[i]);
            this.elements.registerDoneBth().click();
            this.elements.valiMsg().should('be.visible');
            this.elements.userPhone().clear();
        }
    }
    
}

module.exports = new registerPage();

