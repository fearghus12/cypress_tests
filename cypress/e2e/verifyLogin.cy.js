import homePage from '../e2e/pages/homePage'
import loginPage from '../e2e/pages/loginPage'
import accountPage from './pages/accountPage'

it('Blank Login/password',()=> {
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.clickOnLogin();
    loginPage.blankEmailPassValidation()
})
it('Email/blank pw',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.emailField('Test@test.com')
    loginPage.clickOnLogin()
    loginPage.msgError()
})
it('Blank email/ corr pw',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.passField('qwerty')
    loginPage.clickOnLogin()
    loginPage.msgError()
})
it('Incorrect email',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.login('teesfv@as.com','cacss')
    loginPage.errAlert()
})

it('Correct Login', () =>{

    cy.visit('http://localhost:8080/')
    //cy.viewport(1440, 900)
    homePage.clickOnSignin();
    loginPage.login('test@test.com','qwerty');
    


})
it('Logout',()=>{
    cy.visit('http://localhost:8080/')
    homePage.clickOnSignin();
    loginPage.login('test@test.com','qwerty');
    homePage.clickOnSignin();
    accountPage.clickOnLogout();

})