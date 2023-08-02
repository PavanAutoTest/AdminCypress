import Home from "../PageObjects/Home.js";
import Users from "../PageObjects/Users.js"

const home=new Home();
const users=new Users();


describe('UsersTab',()=>{

it('AddNewUser',()=>{
home.setAddNewUser();
users.setAddUsersbutton();
users.setAddUser_FirstNameField();
cy.wait(1000)
users.setAddUser_LastNameField();
cy.wait(1000)
users.setAddUser_EmailAddressField();
cy.wait(1000)
users.setCloseButton();
home.setHomeTab();


})

it('ManageExistingUser',()=>{
  home.setManageExistingUser();
  
  
  })


})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  it('fails to visit website 1', function () {
    cy.visit('http://localhost:5050/login')
  })