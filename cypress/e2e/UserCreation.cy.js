import Home from "../PageObjects/Home.js";
import Users from "../PageObjects/Users.js"
import CustomizedFunctions from "../PageObjects/CustomizedFunctions.js"
import PhoneSystem from "../PageObjects/PhoneSystem.js"

const home=new Home();
const users=new Users();
const custom=new CustomizedFunctions();
const phonesystem=new PhoneSystem();



describe('UsersTab',()=>{
  let fixtureData;
  let  FirstName;
  let LastName;
  let Email;
  let EditFirstName;
  let EditEmail;
  let Extension;
  let GroupName;
  let RoleName;
  let Description;
  let EditRoleName;
  let EditRoleDescription;
  let PermissionType;
  let ConferenceName;
  let ConferencExtension;
  let ConferencePin;
  let VoicemailPin;
 

 

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
      GroupName=fixtureData.HuntGroupName;
      RoleName=fixtureData.RoleName;
      Description=fixtureData.Description;
      EditRoleName=fixtureData.EditRoleName+new Date().getTime();
      EditRoleDescription=fixtureData.EditRoleDescription;
      PermissionType ="Default Local and Caribbean Class";
      ConferenceName=fixtureData.ConferenceName+custom.generateRandomString(5);;
      ConferencExtension=custom.getRandomNumber();
      ConferencePin=custom.getRandomNumber_FiveDigit()
      VoicemailPin=custom.getRandomNumber_FiveDigit()
      cy.addContext(`FirstName---->${FirstName}`);
      cy.addContext(`LastName---->${LastName}`);
      cy.addContext(`Email---->${Email}`);
      cy.addContext(`EditFirstName---->${EditFirstName}`);
      cy.addContext(`EditEmail---->${EditEmail}`);

    });
  
  });

  beforeEach(() => {
    //cy.viewport('macbook-15'); 
    cy.viewport(1920, 1080);
    cy.wait(2000)
    
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
cy.wait(2000)
users.setSuccessMessage("User created successfully");
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
  users.setAddUsertoGroup(GroupName,"Group(s) "+GroupName+" added successfully")
  //users.setEditVoicemailSettings(VoicemailPin)
  users.setSaveChangesButton()
  cy.wait(5000)
  users.setSuccessMessage("User "+EditFirstName+" "+LastName+" Updated Sucessfully.")
  users.setUsersTab()
  users.setSearch(EditFirstName)
  users.setSelectUser(EditEmail)
  users.setEditFirstNameValidation(EditFirstName)
  users.setEditEmailValidation(EditEmail)
  users.setEditCallrecordingValidation()
  //users.setVoiceMailPinValidation(VoicemailPin)
  cy.request('http://localhost:7070/api/user/2930')
        .then((response) => {
          expect(response.status).to.equal(200);
          const userWithMatchingFname = response.body.users.find(user => user.fname === `${EditFirstName}`);
           const agentIdForMatchingFname = userWithMatchingFname.agentid;
          cy.addContext(`agentIdForMatchingFname:${agentIdForMatchingFname}`);
          cy.request(`http://localhost:7070/api/user/2930/${agentIdForMatchingFname}`)
        .then((nextresponse) => {
          cy.addContext(`Response Body:${JSON.stringify(nextresponse.body, null, 2)}`);
          expect(nextresponse.status).to.equal(200);
          const firstUserCallRec = nextresponse.body.users[0].call_rec;
          expect(firstUserCallRec).to.have.property('record_all_calls', true);
       expect(firstUserCallRec).to.have.property('enable_call_rec', true);
       expect(firstUserCallRec).to.have.property('allow_user_edit_call_rec', true);
       expect(firstUserCallRec).to.have.property('play_call_rec_beep', false);
      expect(firstUserCallRec).to.have.property('users_permit_access_call_rec', 4);      
        });
        })
  })

it('EditUserSettings',()=>{
  home.setHomeTab();
  home.setManageExistingUser();
  users.setSearch(EditFirstName)
  users.setSelectUser(EditEmail)
  users.setEditCalllingSMSSettings(PermissionType,"User "+EditFirstName+" "+LastName+" Updated Sucessfully.")
  users.setEditConfernceBridgeSettings(EditFirstName,EditEmail,ConferenceName,ConferencExtension,ConferencePin,"User "+EditFirstName+" "+LastName+" Updated Sucessfully.")
  cy.request('http://localhost:7070/api/user/2930')
  .then((response) => {
    expect(response.status).to.equal(200);
    const userWithMatchingFname = response.body.users.find(user => user.fname === `${EditFirstName}`);
     const agentIdForMatchingFname = userWithMatchingFname.agentid;
    cy.addContext(`agentIdForMatchingFname:${agentIdForMatchingFname}`);
    cy.request(`http://localhost:7070/api/user/2930/${agentIdForMatchingFname}`)
  .then((nextresponse) => {
    cy.addContext(`Response Body:${JSON.stringify(nextresponse.body, null, 2)}`);
    expect(nextresponse.status).to.equal(200);
    const ConferenceResults = nextresponse.body.users[0].conference;
    const calling_permissions=nextresponse.body.users[0].calling_permissions;
    expect(calling_permissions).to.equal(10);
    expect(ConferenceResults).to.have.property('name', `${ConferenceName}`);
   expect(ConferenceResults).to.have.property('pin', ConferencePin);
   expect(ConferenceResults).to.have.property('extension',ConferencExtension);
     
  });
  })
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


 it('AddRole',()=>{
  users.setUsersTab()
  users.setPermissionTab()
  users.setAddAdminRole(RoleName,Description)
  users.setSuccessMessage("Role "+RoleName+" Created successfully.");
  phonesystem.setSearchGroup(RoleName)
  phonesystem.setSelectGroup(RoleName)
  users.setEditFirstNameValidation(RoleName)
  users.setEditRoleDescriptionFieldValidation(Description)
  cy.request('http://localhost:7070/api/roles/2930')
  .then((response) => {
    expect(response.status).to.equal(200);
    const IDMatchingWithRolename = response.body.rolesInfo.find(rolesInfo => rolesInfo.name === `${RoleName}`);
    const RoleIdForMatchingname = IDMatchingWithRolename.id;
    cy.addContext(`RoleIdForMatchingname:${RoleIdForMatchingname}`);
    cy.request(`http://localhost:7070/api/roles/2930/${RoleIdForMatchingname}`)
    .then((nextresponse) => {
      cy.addContext(`Response Body:${JSON.stringify(nextresponse.body, null, 2)}`);
      expect(nextresponse.status).to.equal(200);
      const permissionsResults = nextresponse.body.rolesInfo.permissions;
      expect(permissionsResults.some(permission => permission.role_perm_id === 1)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 2)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 3)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 4)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 5)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 6)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 7)).to.be.true;
      expect(permissionsResults.some(permission => permission.role_perm_id === 8)).to.be.true;

    })

  })


})

it('EditRole',()=>{
  users.setUsersTab()
  users.setPermissionTab()
  phonesystem.setSearchGroup(RoleName)
  phonesystem.setSelectGroup(RoleName)
  users.setEditRoleName_Description(EditRoleName,EditRoleDescription)
  users.setAssignRole_User("1565",EditRoleName)
  users.setUsersTab()
  users.setPermissionTab()
  phonesystem.setSearchGroup(EditRoleName)
  phonesystem.setSelectGroup(EditRoleName)
  cy.wait(2000)
 users.setDeleteRole_User("1234567890 cccaa",EditRoleName)
  


})  


 it('DeleteRole',()=>{
  users.setUsersTab()
  users.setPermissionTab()
  phonesystem.setSearchGroup(EditRoleName)
  users.setDeleteRole(EditRoleName)
  users.setRemoveConfirmButton();
  users.setSuccessMessage("Role "+EditRoleName+" has been deleted successfully");
  phonesystem.setSearchGroup(EditRoleName)
  users.setNoMatchingResultsFound();
})  







})




