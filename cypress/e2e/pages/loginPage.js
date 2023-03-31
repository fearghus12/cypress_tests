
class loginPage{


    elements ={
        userEmail: () => cy.get('#email'),
        userPassword: () => cy.get('#password'),
        loginBtn: () => cy.get('#log-in'),
        registerBtn: () => cy.get('#register'),
        wait:()=> cy.wait(1000),
        errorMsg: ()=>cy.get('.v-messages__message'),
        errorFirstMsg:()=> cy.get(':nth-child(1) > .v-input__details > .v-messages > .v-messages__message'),
        errorSecondMsg: () => cy.get(':nth-child(2) > .v-input__details > .v-messages > .v-messages__message'),
        errorAlert: ()=> cy.get('#error-alert'),
    }
    clickOnLogin(){
        this.elements.loginBtn().click()
    }
    errAlert(){
        this.elements.errorAlert().should('be.visible')
    }
    msgError(){
        this.elements.errorMsg().should('be.visible')
    }
    blankEmailPassValidation(){
        this.elements.errorFirstMsg().should('be.visible')
        this.elements.errorSecondMsg().should('be.visible')
    }
    emailField(acc){
        this.elements.userEmail().type(acc);
    }
    passField(pw){
        this.elements.userPassword().type(pw)}


    login(acc,pw){
        
        this.elements.userEmail().type(acc);
        this.elements.userPassword().type(pw);
        this.elements.loginBtn().click();
        this.elements.wait();

    }

    clickOnRegister(){
        this.elements.registerBtn().click();
    }


}


module.exports = new loginPage();



