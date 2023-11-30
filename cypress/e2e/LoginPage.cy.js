import Login from "../PageObjects/Login";
import Home from "../PageObjects/Home.js";




const login=new Login()
const home=new Home();





describe('AdminFive Login Actions',()=>{



  it('LoginWithInValidCredintials',()=>{
    console.log('All Environment Variables:', Cypress.env());
    cy.fixture(`${Cypress.env('targetEnvironment')}`).then((data) => {
    cy.visit(data.BaseURL)
    cy.log(`The sansrwdawdraa`)
    login.setUserName(data.InvalidUsername)
    login.setPassword(data.InvalidPassword)
    login.setLoginbutton()
    login.setInvalidAlertValidation()
})
})

    it('LoginWithValidCredintials',()=>{
      const targetEnvironment = Cypress.env('targetEnvironment');
      cy.addContext(`&&&targetEnvironment----${targetEnvironment}`);
        cy.fixture(targetEnvironment).then((data) => {
        cy.visit(data.BaseURL)
        cy.log(`The sansrwdawdraa`)
        login.setUserName(data.username)
        login.setPassword(data.password)
        login.setLoginbutton()
        home.setHomeTab()
    })
})
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  it('fails to visit website 1', function () {

    cy.visit('http://localhost:5050/home')
    
  })