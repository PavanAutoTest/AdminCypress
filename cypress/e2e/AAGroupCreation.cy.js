import Home from "../PageObjects/Home.js";
import PhoneSystem from "../PageObjects/PhoneSystem.js"
import Users from "../PageObjects/Users.js"
import CustomizedFunctions from "../PageObjects/CustomizedFunctions.js"
const home=new Home();
const phonesystem=new PhoneSystem();
const users=new Users();
const custom=new CustomizedFunctions();

describe('AutoAttendantGroupValidation',()=>{

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
        
        cy.viewport('macbook-15'); 
        
      });


    it('AddAutoAttendantGroup',()=>{
      cy.log("&&&&AddAutoAttendantGroup&&&&&&")
        home.setHomeTab();
        home.setAddAutoAttendants();
        phonesystem.setAutoAttendants()
        phonesystem.setADDAutoAttendantGroup()
        phonesystem.setAutoAttendantGroupNameField(GroupName)
        phonesystem.setExtensionFieldField(Extension)
        users.setAddButton();
        users.setUserCreationSuccessMessage("Auto Attendant Group "+GroupName+" created successfully");
        home.setHomeTab();
        home.setManageExistingAutoAttendants()
        phonesystem.setAutoAttendants()
        phonesystem.setSearchGroup(GroupName)
        phonesystem.setSelectGroup(GroupName)
        
        
    })

    it('ManageExistingAutoAttendantGroup',()=>{
      cy.log("&&&&ManageExistingAutoAttendantGroup&&&&&&")
      home.setHomeTab();
      home.setManageExistingAutoAttendants()
      phonesystem.setAutoAttendants()
      phonesystem.setSearchGroup(GroupName)
      phonesystem.setSelectGroup(GroupName)
      phonesystem.setAddnumbersbutton_AutoAttendant()
       phonesystem.setSelectAddNumbers()
      phonesystem.setAddButton();
      phonesystem.setSaveChangesButton()
      users.setUserCreationSuccessMessage("Auto-Attendant Group edited successfully");
      phonesystem.setSearchGroup(GroupName)
      phonesystem.setSelectGroup(GroupName)
      phonesystem.setAddNumberValidation() 
    })

    it('DeleteAutoAttendantGroup',()=>{
      cy.log("&&&&DeleteAutoAttendantGroup&&&&&&")
      home.setHomeTab();
      home.setManageExistingAutoAttendants()
      phonesystem.setAutoAttendants()
      phonesystem.setSearchGroup(GroupName)
      phonesystem.setRemoveAutoAttendantButton()
       users.setRemoveConfirmButton();
       users.setUserCreationSuccessMessage("Auto-Attendant Group deleted successfully!");
       phonesystem.setSearchGroup(GroupName)
       users.setNoMatchingResultsFound()

    })

      


    

    

})

