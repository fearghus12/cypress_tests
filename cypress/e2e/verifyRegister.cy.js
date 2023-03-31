import homePage from './pages/homePage'
import loginPage from './pages/loginPage'
import registerPage from './pages/registerPage'

it('Verify terms validation', () =>{

    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(false);
    
})

it('Verify email validation', ()=> {
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.verifyEmail();

})
it('Verify password validation', ()=> {
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.verifyPassword();
})
it('Verify personal data(blank)', ()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.personalDataBlank();
    
})
it('First name validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.firstNameValidation();

})
it('Last name validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.lastNameValidation();
    
})
it('Zip Code validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.zipCodeValidation();
    
})
it('City validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.cityValidation();
    
})
it('Address validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.addressValidation();
    
})
it('Phone validation',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnRegister();
    registerPage.verifyTerms(true);
    registerPage.correctEmail();
    registerPage.correctPassword();
    registerPage.clickOnNextBtn();
    registerPage.phoneValidation();
    
})