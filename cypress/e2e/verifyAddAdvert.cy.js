import homePage from '../e2e/pages/homePage'
import loginPage from '../e2e/pages/loginPage'
import addAdvertPage from './pages/addAdvertPage'

// it('Login', () =>{

//     cy.visit('http://localhost:8080/')
//     cy.viewport(1440, 900)
//     homePage.clickOnSignin();
//     loginPage.login('test@test.com','qwerty');
   
    
    
// })
// it('Go to "Dodaj ogloszenie"', ()=>{
//     cy.visit('http://localhost:8080/')
//     cy.viewport(1440, 900)
//     homePage.clickOnSignin();
//     loginPage.login('test@test.com','qwerty');
//     homePage.clickOnAdvert();
// })
// it('Trying add blank advert',()=>{
//     cy.visit('http://localhost:8080/')
//     cy.viewport(1440, 900)
//     homePage.clickOnSignin();
//     loginPage.login('test@test.com','qwerty');
//     homePage.clickOnAdvert();
//     addAdvertPage.addAdvertBlank();   
// })
// it('Adding advert without category',()=> {
//     cy.visit('http://localhost:8080/')
//     cy.viewport(1440, 900)
//     homePage.clickOnSignin();
//     loginPage.login('test@test.com','qwerty');
//     homePage.clickOnAdvert();
//     addAdvertPage.addAdvertBlank();

// })
// it('Selecting through categorys', ()=>{
//     cy.visit('http://localhost:8080/')
//     cy.viewport(1440, 900)
//     homePage.clickOnSignin();
//     loginPage.login('test@test.com','qwerty');
//     homePage.clickOnAdvert();
//     addAdvertPage.addAdvertOneCategory();
// })
it('Adding advert', ()=>{
    cy.visit('http://localhost:8080/')
    cy.viewport(1440, 900)
    homePage.clickOnSignin();
    loginPage.login('test@test.com','qwerty');
    homePage.clickOnAdvert();
    addAdvertPage.randomCategory();
    addAdvertPage.addMoreImg();
})

