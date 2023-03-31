import homePage from './pages/homePage'
import loginPage from './pages/loginPage'
import accountPage from './pages/accountPage'





describe('Testing Aktywne tab',()=>{

    // it('Going to Account Page and active "Aktywne" tab',()=>{
    //     cy.visit('http://localhost:8080/')
    //     cy.viewport(1440, 900)
    //     homePage.clickOnSignin();
    //     loginPage.login('test@test.com','qwerty');
    //     homePage.clickOnSignin();
    //     accountPage.clickOnCategory('Aktywne')
    
    // })
    // it('Sortowanie ',()=>{
    //     cy.visit('http://localhost:8080/')
    //     cy.viewport(1280, 900)
    //     homePage.clickOnSignin();
    //     loginPage.login('test@test.com','qwerty');
    //     homePage.clickOnSignin();
    //     accountPage.clickOnCategory('Aktywne')
    //     accountPage.sortingTesting('Cena: od najtańszych','10zł','2 324zł')
    //     accountPage.sortingTesting('Cena: od najdroższych','2 324zł','10zł')
    //     accountPage.sortingTesting('Najnowsze','Wczoraj 17:21','27 marca 2023')
    //     accountPage.sortingTesting('Najstarsze','27 marca 2023','Wczoraj 17:21')
    // })
    it('Cena',()=>{
        cy.visit('http://localhost:8080/')
        cy.viewport(1279, 900)
        homePage.clickOnSignin();
        loginPage.login('test@test.com','qwerty');
        homePage.clickOnSignin();
        accountPage.clickOnCategory('Aktywne')
        // accountPage.priceMinMax()
        accountPage.sortingTesting()

    })


})