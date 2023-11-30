import Home from "../PageObjects/Home.js";
import PhoneSystem from "../PageObjects/PhoneSystem.js"
import Users from "../PageObjects/Users.js"
import CustomizedFunctions from "../PageObjects/CustomizedFunctions.js"
const home=new Home();
const phonesystem=new PhoneSystem();
const users=new Users();
const custom=new CustomizedFunctions();




describe('HuntGroupValidation',()=>{

    let fixtureData;
    let GroupName;
    let Extension;
    
   

    

    before(() => {
        cy.fixture(`${Cypress.env('targetEnvironment')}`).then((data) => {
          fixtureData = data;
          GroupName=custom.generateRandomString(10);
          Extension=custom.getRandomNumber();
        });
      });

      beforeEach(() => {
        //cy.viewport(1200, 800);
        cy.viewport('macbook-15'); 
        
      });


    it('AddHuntGroup',()=>{
        home.setHomeTab();
        cy.wait(2000)
        home.setAddHuntGroup();
        phonesystem.setAddHuntGroupNameField(GroupName)
        phonesystem.setExtensionFieldField(Extension)
        users.setAddButton();
        users.setUserCreationSuccessMessage("Group "+GroupName+" created successfully");
        cy.wait(3000)
        users.setCloseButton();
        
    })

      it('ManageExistingHuntGroup',()=>{
      home.setHomeTab();
      home.setManageExistingHuntGroups()
      phonesystem.setSearchGroup(GroupName)
      cy.then(() =>{
        return phonesystem.getAuttoAssignedFieldText(GroupName)
      })
     .then((anotherResult) =>{
    console.log(`Another Result: ${anotherResult}`);
    phonesystem.setSelectGroup(GroupName)
    //phonesystem.setExetensionFieldValidation(anotherResult) 
   
  })
    cy.wait(3000)
    phonesystem.setAddnumbersbutton()
    phonesystem.setSelectAddNumbers()
    phonesystem.setAddButton();
    //phonesystem.setSaveChangesButton()
    //users.setUserCreationSuccessMessage("Hunt Group edited successfully");
    home.setHomeTab();
    home.setManageExistingHuntGroups()
    phonesystem.setSearchGroup(GroupName)
    phonesystem.setSelectGroup(GroupName)
    phonesystem.setAddNumberValidation() 
  


 
    });


    it('DeleteHuntGroup',()=>{
      cy.log("&&&&&DeleteHuntGroup&&&&&")
        home.setHomeTab();
        home.setManageExistingHuntGroups()
        phonesystem.setSearchGroup(GroupName)
       phonesystem.setRemoveButton()
       users.setRemoveConfirmButton();
       users.setUserCreationSuccessMessage("Group "+GroupName+" Deleted Successfully.");

     

    }) 

    

})

