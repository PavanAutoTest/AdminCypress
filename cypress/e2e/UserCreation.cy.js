import Home from "../PageObjects/Home.js";
import Users from "../PageObjects/Users.js"
import CustomizedFunctions from "../PageObjects/CustomizedFunctions.js"

const home=new Home();
const users=new Users();
const custom=new CustomizedFunctions();



describe('UsersTab',()=>{
  let fixtureData;
  let  FirstName;
  let LastName;
  let Email;
  let EditFirstName;
  let EditEmail;
  let Extension;
 

  before(() => {
    cy.fixture(`${Cypress.env('targetEnvironment')}`).then((data) => {
      fixtureData = data;
      FirstName=fixtureData.FirstName+Date.now();
      cy.wait(2000)
      LastName=fixtureData.lastName;
     cy.wait(2000)
      Email=fixtureData.Email+new Date().getTime()+"@pandorarndlabs.com";
      cy.wait(2000)
      EditFirstName=fixtureData.EditFirstName+new Date().getTime();
      cy.wait(2000)
      EditEmail=fixtureData.EditEmail+new Date().getTime()+"@pandorarndlabs.com";
      Extension=custom.getRandomNumber();
      cy.addContext(`FirstName---->${FirstName}`);
      cy.addContext(`LastName---->${LastName}`);
      cy.addContext(`Email---->${Email}`);
      cy.addContext(`EditFirstName---->${EditFirstName}`);
      cy.addContext(`EditEmail---->${EditEmail}`);

    });
  
  });

  beforeEach(() => {
        
    cy.viewport('macbook-15'); 
    
  });




 it('AddNewUser',()=>{
home.setAddNewUser();
users.setAddUser_FirstNameField(FirstName);
users.setAddUser_LastNameField(LastName);
users.setAddUser_EmailAddressField(Email);
users.setSelectSeatPlan();
users.setSelectSeatTerm();
users.setSelectExentsion(Extension)
users.setAddButton();
users.setUserCreationSuccessMessage("User created successfully");
users.setCloseSymbol();

})

it('ManageExistingUser',()=>{
  home.setHomeTab();
  home.setManageExistingUser();
  users.setSearch(FirstName)
  users.setSelectUser(Email)
  users.setUserFirstNameFieldEdit(EditFirstName)
  users.setUserEmailFieldEdit(EditEmail)
  users.setUserCallrecordingEdit()
  users.setSaveChangesButton()
  users.setUserCreationSuccessMessage("User "+EditFirstName+" "+LastName+" Updated Sucessfully.")
  users.setUsersTab()
  users.setSearch(EditFirstName)
  users.setSelectUser(EditEmail)
  users.setEditFirstNameValidation(EditFirstName)
  users.setEditEmailValidation(EditEmail)
  })

it('DeleteUser',()=>{
  users.setUsersTab()
  users.setSearch(EditFirstName)
  users.setRemoveButton(EditEmail);
  users.setRemoveConfirmButton();
  users.setLoadingClassInvisibility()
  users.setSearch(EditFirstName)
  users.setNoMatchingResultsFound();

})





})




