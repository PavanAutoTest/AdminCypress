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
    let VoicemailPin;
    let Email;
    let SequentialCode=2;
    
    
   

    

    before(() => {
        cy.fixture(`${Cypress.env('targetEnvironment')}`).then((data) => {
          fixtureData = data;
          GroupName=custom.generateRandomString(10);
          Extension=custom.getRandomNumber();
          VoicemailPin=custom.getRandomNumber_FiveDigit();
          Email=fixtureData.Email+"@pandorarndlabs.com";
        });
      });

      beforeEach(() => {
        //cy.viewport(1200, 800);
        //cy.viewport('macbook-15'); 
        cy.viewport(1920, 1080);
        
      });


    it('AddHuntGroup',()=>{
        home.setHomeTab();
        cy.wait(2000)
        home.setAddHuntGroup();
        phonesystem.setAddHuntGroupNameField(GroupName)
        phonesystem.setExtensionFieldField(Extension)
        users.setAddButton();
        users.setSuccessMessage("Group "+GroupName+" created successfully");
        cy.wait(3000)
        users.setCloseButton();
        
    })

      it('ManageExistingHuntGroup',()=>{
      home.setHomeTab();
      home.setManageExistingHuntGroups()
      phonesystem.setSearchGroup(GroupName)
      phonesystem.setSelectGroup(GroupName)
    cy.wait(3000)
    phonesystem.setAddnumbersbutton()
    phonesystem.setSelectAddNumbers()
    phonesystem.setAddButton();
    cy.then(() =>{
        return phonesystem.getAddedNumber_SuccessMessage()
    })
    .then((GetPhoneNumber) =>{
      console.log(`GetPhoneNumber: ${GetPhoneNumber}`);
      home.setHomeTab();
      home.setManageExistingNumbers();
      phonesystem.setPhoneNumbers();
      phonesystem.setassigned();
      //cy.wait(50000)
      phonesystem.setPhoneNumberSearch(GetPhoneNumber)
    })
    //cy.wait(500000)
    home.setHomeTab();
    home.setManageExistingHuntGroups()
    phonesystem.setSearchGroup(GroupName)
    phonesystem.setSelectGroup(GroupName)
    phonesystem.setAddNumberValidation() 
   phonesystem.setHunt_RoutingEdit("Sequential","20","autowebtwo","Group "+GroupName+" Updated Sucessfully.")
    home.setHomeTab();
    home.setManageExistingHuntGroups()
    phonesystem.setSearchGroup(GroupName)
    phonesystem.setSelectGroup(GroupName)
    phonesystem.setHunt_VoicemailEdit(VoicemailPin,Email,"Group "+GroupName+" Updated Sucessfully.")
    cy.request('http://localhost:7070/api/hunt/2930')
    .then((response) => {
      expect(response.status).to.equal(200);
          const GroupWithMatchingtitle = response.body.groups.find(group => group.title === `${GroupName}`);
           const GroupCodeForMatchingtitle = GroupWithMatchingtitle.code;
           cy.addContext(`agentIdForMatchingFname:${GroupCodeForMatchingtitle}`);
          cy.request(`http://localhost:7070/api/hunt/2930/${GroupCodeForMatchingtitle}`)
          .then((nextresponse) => {
            cy.addContext(`Response Body:${JSON.stringify(nextresponse.body, null, 2)}`);
            expect(nextresponse.status).to.equal(200);
            const RoutingResults = nextresponse.body.routing;
            const VoiceMailResults=nextresponse.body.voice_mail;
            expect(RoutingResults).to.have.property('ring_dist',2);
            expect(RoutingResults).to.have.property('per_seq_ring_time',20);
            expect(VoiceMailResults).to.have.property('vm_pin',VoicemailPin);
            expect(VoiceMailResults).to.have.property('play_msg_time_stmp',true);
            expect(VoiceMailResults).to.have.property('broadcast_vm_to_account',true);
            expect(VoiceMailResults).to.have.property('email_notify',true);
            expect(VoiceMailResults).to.have.property('email_address',`${Email}`);

          })
    })

 
    });


     it('DeleteHuntGroup',()=>{
      cy.log("&&&&&DeleteHuntGroup&&&&&")
        home.setHomeTab();
        home.setManageExistingHuntGroups()
        phonesystem.setSearchGroup(GroupName)
       phonesystem.setRemoveButton()
       users.setRemoveConfirmButton();
       users.setSuccessMessage("Group "+GroupName+" Deleted Successfully.");

     

    })  

    

})

