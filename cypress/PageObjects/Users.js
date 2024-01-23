
class Users{
   

    UsersTab="//i[@class='users_icon']"
    AddUsersButton="//h5[@class='w-100 dblock']/button[contains(text(),'+ ')]";
    FirstNameField="//div[@class='form pt-1 w-100']/input";
    LastNameField="//strong[text()='Last Name']/../../div[@class='form pt-1']";
    EmailAdressField="//strong[text()='Email Address']/../following::div[@class='form pt-1']/input";
    ExtensionField="//input[@name='extension']"
    ExtensionFailedAlert="//p[text()='Extension is not available']"
    CloseButton="//button[text()='Close']";
    SeatPlanDropDown="//strong[text()='Seat Plan']/../following::div[@class='form pt-1'][1]/div/select";
    SeatPlanDropDown1="//strong[text()='Seat Plan']/../following::div[1]/div/select/option";
    SeatTermDropDown="//strong[text()='Seat Term']/../following::div[1]/div/select";
    ExtensionAutoAssignCheckBox="//div[@class='mt-2']/input[@type='checkbox']";
    LocationDropDown="//strong[text()='Location']/../../select"
    BillingGroupDropDown="//strong[text()='Billing Group']/../../select";
    AddButton="//button[text()='Add']";
    AddFilter="//h5[@class='w-100 dblock']/button[text()='Add Filter']"
    ImportUsersTab="//h5[@class='w-100 dblock']/button[text()='Import Users']"
    ExportUsersTab="//h5[@class='w-100 dblock']/button[text()='Export Users']"
    FilterDropDown="//h5[@class='w-100 dblock']/div[@aria-label='Button group with nested dropdown']"
    SearchField="//div[@class='tab-pane fade show active borderactive']/descendant::label/../input"
    UserTab_UserGroupsTab="//a[@class='nav-link'][text()='User Groups']";
    UserTab_Users="//ul[@class='nav nav-tabs']/descendant::a[@class='nav-link'][text()='Users']"
    UserTab_Locations="//ul[@class='nav nav-tabs']/descendant::a[@class='nav-link'][text()='Locations']"
    UserTab_Groups="//ul[@class='nav nav-tabs']/descendant::a[@class='nav-link'][text()='groups']"
    RightSideList_UsersTab="//li[@class='sidenav-item']/a/span[text()='Users']"
    RightSideList_StreamsTeams="//li[@class='sidenav-item']/a/span[text()='Streams Teams']"
    RightSideList_PermissionRoles="//li[@class='sidenav-item']/a/span[text()='Permission Roles']"
   RemoveUser="//a[@class='text-center w-100']"
    StreamsHandsOnLogin="//a[@class='text-center w-100']/i[@class='fas fa-sign-in-alt green']"
    RemoveConfirmButton="//button[@class='ripple ripple-surface btn btn-primary'][text()='Remove']"
    CloseSymbol="//h5[@class='modal-title'][text()='Add User']/../button"
    UserCreationSuccessMessage="//span[@class='alert-msg']"
    EditFirstNameField="//label[@class='float-left'][text()='First Name']/../input"
    EditLastNameField="//label[@class='float-left'][text()='Last Name']/../input"
    EditEmailAddressField="//div[@class='tel-numbers'][text()='Email Address']/../descendant::input[@class='w-100']"
    SaveChangesButton="//button[@role='button'][text()='Save Changes']"
    LaodingClass="//div[@class='loadingclass']"
    NoMatchingResultsFould="//td[@class='text-center'][text()='No matching results found']"
    CallRecordingRadioButton="//div[@id='CallRecording']/../descendant::span[@class='slider round']"
    AllUserstoEditCallRecording="//div[text()='Allow User to edit Call Recording']/../div[@class='phoneselect']"
    RecordAllCalls="//div[text()='Record All Calls']/../div[@class='phoneselect']"
    PlayCallRecordingBeep="//div[text()='Play Call Recording Beep']/../div[@class='phoneselect']/descendant::span"
    CallRecordingPermission="//div[@class='tel-numbers'][contains(text(),'permission ')]/../descendant::select"
    CallRecordinglink="//a[@class='nav-link'][contains(text(),'Call Recording')]/.."
    AddToGroupButton="//button[text()='Add to a Group']"
    Searchgroup_User="//div[@class='col-12']/descendant::input[@placeholder='Search']"
    AddAdminRoleButton="//button[contains(text(),'+')]"
    AddAdminRole_NameField="//input[@type='text'][@class='w-100']"
    AddAdminRole_DescriptionField="//textarea[@id='textAreaExample']"
    AddAdminRole_ManageSeats="//p[text()='Manage Seats']/../descendant::span[@class='slider round']"
    AddAdminRole_AddUsers="//p[text()='Add, Delete, and Edit Users']/../descendant::span[@class='slider round']"
    AddAdminRole_AddAccounts="//p[text()='Add, delete and edit accounts settings and features']/../descendant::span[@class='slider round']"
    AddAdminRole_ManageOtherAdmins="//p[text()='Manage other Admins']/../descendant::span[@class='slider round']"
    AddAdminRole_AccessReports="//p[text()='Access user data in reports']/../descendant::span[@class='slider round']"
    AddAdminRole_AccessCallrecordings="//p[text()='Access user call recordings']/../descendant::span[@class='slider round']"
    AddAdminRole_AddPermissionRoles="//p[text()='Add, delete and edit Permission Roles']/../descendant::span[@class='slider round']"
    AddAdminRole_AccessBillingSection="//p[text()='Access billing section']/../descendant::span[@class='slider round']"
    AddAdminRole_Location1="//label[@for='inlineRadio1'][text()='All Location']"
    AddAdminRole_Location2="//label[@for='inlineRadio2'][text()='Select Location']"
    AddAdminRole_EditNameField="//div[@class='tel-numbers'][text()='Name']/../descendant::input"
    AddAdminRole_EditDescriptionField="//div[@class='tel-numbers mt-3'][text()='Description']/../descendant::textarea"
    DeleteRole="//td[text()='AutomationTest']/../td/i[@class='fas fa-xmark ms-4 text-primary']"
    RoleName_Field="//div[@class='tel-numbers'][text()='Name']/../descendant::input"
    RoleDescription_Field="//div[@class='tel-numbers mt-3'][text()='Description']/../descendant::textarea"
    Roles_UsersTab="//ul[@class='nav nav-tabs mb-3']/descendant::a[text()='Users']"
    Roles_SettingsTab="//ul[@class='nav nav-tabs mb-3']/descendant::a[text()='Settings']"
    SearchField1="//label[@class='form-label'][text()='Search']/../input"
    CallingSMS_AddNumbers="//div[text()='Telephone Numbers']/../descendant::button[text()='Add Numbers']"
    SelectNumbers="//div[@class='chips chips-placeholder']/div[@class='numberadd']"
    TelephoneNumbersField="//div[@class='chip chip-sm m-chip d-inline py-2 px-3']"
    CallingSMS_CallingPermision="//div[@class='tel-numbers'][text()='Calling Permission']/../descendant::select"
    ConferenceRadioButton="//div[@class='tel-numbers'][text()='Conference Bridge']/../descendant::span"
    ConferenceName="//input[@name='conference.name']"
    ConferenceExtension="//input[@name='conference.extension']"
    Conference_AddNumbers="//div[@class='add-numbermain py-2']/button[text()='Add Numbers']"
    ConferencePin="//input[@name='conference.pin']"
    VoicemailMail="//input[@name='voice_mail.email_address']"
    VoicemailFormat="//div[@class='tel-numbers'][text()='VoiceMail Format']/../descendant::select"
    VoicemailPin="//div[@id='voicemail']/../descendant::div[text()='Pin']/../descendant::input"
   

    setAddUsersbutton(){
        cy.xpath(this.AddUsersButton).click();

    }

    setAddUser_FirstNameField(FirstName){
        cy.xpath(this.FirstNameField).should('be.visible')
        cy.xpath(this.FirstNameField).type(FirstName)
        cy.wait(1000)

    
       
    }

    setAddUser_LastNameField(lastName){
        cy.xpath(this.LastNameField).should('be.visible')
        cy.xpath(this.LastNameField).type(lastName)
        cy.wait(1000)
    }

    setAddUser_EmailAddressField(Email){
        cy.xpath(this.EmailAdressField).should('be.visible')
        cy.xpath(this.EmailAdressField).type(Email)
        cy.wait(1000)
    }

    setSelectSeatPlan(){
        cy.xpath(this.SeatPlanDropDown).should('be.visible')
      cy.xpath(this.SeatPlanDropDown).select('WS-Call Center')
      //cy.wait(2000)
        
    }

    setSelectSeatTerm(){
        cy.xpath(this.SeatTermDropDown).should('be.visible')
      cy.xpath(this.SeatTermDropDown).select('0')
      //cy.wait(2000)
        
    }

    setSelectExentsion(Extension){
        cy.xpath(this.ExtensionField).should('be.visible')
        cy.xpath(this.ExtensionField).type(Extension)
        
       /*  cy.xpath(this.ExtensionFailedAlert)
        .should('not.be.visible')
        .then(() => {
          cy.log('Element is not visible');
        })
        .catch(() => {
          cy.log('Element is visible or not found. Taking corrective actions.');
          var val = Math.floor(1000 + Math.random() * 9000);
          cy.xpath(this.ExtensionField).clear().type(val);
        }); */
        cy.wait(1000)
    }

    setCloseButton(){
        cy.xpath(this.CloseButton).should('be.visible')
        cy.xpath(this.CloseButton).click();
    }

    setAddButton(){
        cy.xpath(this.AddButton).should('be.visible')
        cy.xpath(this.AddButton).click();
    }

    setUsersTab(){
        cy.xpath(this.UsersTab).should('be.visible');
        cy.xpath(this.UsersTab).click();
    }

    setSearch(FirstName){
        cy.xpath(this.SearchField).should('be.visible');
        cy.xpath(this.SearchField).type(FirstName)
    }

    setRemoveButton(Email){
        let listlength;
        cy.viewport(1920, 1080);
        cy.wait(2000)
     cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+Email+"']/../td").its('length').then((length) => {
        listlength=length;
        cy.addContext(`listlength---->${listlength}`);
        cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+Email+"']/../td["+listlength+"]").as('elementToClick');
        cy.get('@elementToClick').should('be.visible').trigger('mouseover').click();
     })
    
        
        
    }

   /*  setRemoveButton(){
        cy.viewport('macbook-15'); 
        cy.xpath(this.RemoveUser).should('exist').then(($listItems) => {
            // Ensure at least 2 elements are found
            expect($listItems).to.have.length.at.least(2);
        
            // Get the second element and click it
            const specificElement = $listItems.eq(1);
            cy.wait(2000); 
            console.log(specificElement);
            cy.viewport('macbook-15'); 
            cy.wrap(specificElement).scrollIntoView().should('be.visible').click();
            //specificElement[0].click();
           
        });
    } */

    setCloseSymbol(){
        cy.xpath(this.CloseSymbol).should('be.visible');
        cy.xpath(this.CloseSymbol).click();
    }

    setRemoveConfirmButton(){
        cy.xpath(this.RemoveConfirmButton).should('be.visible');
        cy.xpath(this.RemoveConfirmButton).click();
    }

    setSuccessMessage(Alert){
        let elementText;
        cy.get('.alert-msg').invoke('text').should('eq',Alert);
        cy.xpath(this.UserCreationSuccessMessage).invoke('text').then((text) =>{
            elementText=text.trim();
            cy.addContext(`The text is:${elementText}`)
            cy.addContext(`Alert:${Alert}`)
          

        });
      
        
    }

    setUserEditSuccessMessage(Alert){
        cy.xpath(this.UserCreationSuccessMessage).should('have.text',Alert);
    }

   setSelectUser(Email){
    cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+Email+"']").should('be.visible')
    cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+Email+"']").click();
    cy.wait(5000)
   }

   setUserFirstNameFieldEdit(EditFirstName){
    cy.xpath(this.EditFirstNameField).should('be.visible');
    cy.xpath(this.EditFirstNameField).clear();
    cy.xpath(this.EditFirstNameField).type(EditFirstName)
   }

   setUserLastNameFieldEdit(EditLastName){
    cy.xpath(this.EditLastNameField).should('be.visible');
    cy.xpath(this.EditLastNameField).clear();
    cy.xpath(this.EditLastNameField).type(EditLastName)
   }

   setUserEmailFieldEdit(EditEmail){
    cy.xpath(this.EditEmailAddressField).should('be.visible');
    cy.xpath(this.EditEmailAddressField).clear();
    cy.xpath(this.EditEmailAddressField).type(EditEmail)
   }

   setSaveChangesButton(){
    cy.wait(5000)
    cy.xpath(this.SaveChangesButton).then(($listItems) => {
        const specificElement = $listItems.eq(0);
        cy.wrap(specificElement).click()
    })
    //cy.xpath("//*[@id='page-content']/div/section/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/button").should('be.visible').should('not.be.disabled');
    //cy.xpath("//*[@id='page-content']/div/section/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/button").click();
   }

   setFirstNameFieldValidation(EditFirstName){
    cy.xpath(this.EditFirstNameField).should('be.visible');
    cy.xpath(this.EditFirstNameField).should('have.attr','value',EditFirstName);
    cy.xpath(this.EditFirstNameField).invoke('attr', 'value').then((text) =>{
        let EditFirstNamevalue=text;
        cy.log(`Actualhe EditFirstNamevalue --->${EditFirstNamevalue}`);
        console.log(`The ActualEditFirstNamevalue --->${EditFirstNamevalue}`)
        console.log(`The ExpectedEditFirstNamevalue --->${EditFirstName}`)
    })
   
   }


   setEditFirstNameValidation(EditFirstName){
    cy.xpath("//h5[contains(text(),'"+EditFirstName+"')]").should('be.visible');
   }

   setEditEmailValidation(EditEmail){
    cy.xpath("//p[@class='mb-1 text-secondary'][text()='"+EditEmail+"']").should('be.visible');
   }

   setLoadingClassInvisibility(){
    cy.xpath(this.LaodingClass).should('not.be.visible');
   }


   setNoMatchingResultsFound(){
     cy.xpath(this.NoMatchingResultsFould).should('be.visible');
   }

   setUserCallrecordingEdit(){
    cy.xpath(this.CallRecordingRadioButton).scrollIntoView();
    cy.xpath(this.CallRecordingRadioButton).should('be.visible');
    cy.xpath(this.CallRecordingRadioButton).click();
    cy.xpath(this.AllUserstoEditCallRecording).should('be.visible');
    cy.xpath(this.AllUserstoEditCallRecording).click();
    cy.xpath(this.RecordAllCalls).should('be.visible');
    cy.xpath(this.RecordAllCalls).click();
    cy.xpath(this.PlayCallRecordingBeep).should('be.visible');
    cy.xpath(this.PlayCallRecordingBeep).click();
    cy.xpath(this.CallRecordingPermission).should('be.visible');
    cy.xpath(this.CallRecordingPermission).select('View, Play, Download & Delete');
   }

   setEditCallrecordingValidation(){
    cy.xpath(this.CallRecordingPermission).scrollIntoView();
    cy.xpath(this.CallRecordingPermission).should('be.visible');
   }

   setAddUsertoGroup(GroupName,Alert){
    cy.xpath(this.AddToGroupButton).scrollIntoView();
    cy.xpath(this.AddToGroupButton).should('be.visible');
    cy.xpath(this.AddToGroupButton).click();
    cy.xpath(this.Searchgroup_User).should('be.visible');
    cy.xpath(this.Searchgroup_User).type(GroupName)
    cy.xpath("//table[@class='table table-hover table-sm mt-3']/descendant::td[text()='"+GroupName+"']").should('be.visible');
    cy.xpath("//table[@class='table table-hover table-sm mt-3']/descendant::td[text()='"+GroupName+"']").click();
    cy.xpath(this.AddButton).should('be.visible');
    cy.xpath(this.AddButton).click()
    cy.get('.alert-msg').invoke('text').should('eq',Alert);
    cy.xpath("//div[@class='ps-0 userEdit_GroupsTable']/descendant::tbody/descendant::td[text()='"+GroupName+"']").should('be.visible');
   }

   setPermissionTab(){
    cy.xpath(this.RightSideList_PermissionRoles).should('be.visible');
    cy.xpath(this.RightSideList_PermissionRoles).click();
   }

   setAddAdminRoleButton(){
    cy.xpath(this.AddAdminRoleButton).should('be.visible');
    cy.xpath(this.AddAdminRoleButton).click();
   }

   setAddAdminRole_NameField(RoleName){
    cy.xpath(this.AddAdminRole_NameField).should('be.visible');
    cy.xpath(this.AddAdminRole_NameField).clear()
    cy.xpath(this.AddAdminRole_NameField).type(RoleName)
   }

   setAddAdminRole_DescriptionField(Description){
    cy.xpath(this.AddAdminRole_DescriptionField).should('be.visible');
    cy.xpath(this.AddAdminRole_DescriptionField).clear()
    cy.xpath(this.AddAdminRole_DescriptionField).type(Description)
   }

   setSelect_Role_RadioButton(){
    cy.xpath(this.AddAdminRole_ManageSeats).should('be.visible');
    cy.xpath(this.AddAdminRole_ManageSeats).click()
    cy.xpath(this.AddAdminRole_AddUsers).should('be.visible');
    cy.xpath(this.AddAdminRole_AddUsers).click()
    cy.xpath(this.AddAdminRole_AddAccounts).should('be.visible');
    cy.xpath(this.AddAdminRole_AddAccounts).click()
    cy.xpath(this.AddAdminRole_ManageOtherAdmins).should('be.visible');
    cy.xpath(this.AddAdminRole_ManageOtherAdmins).click()
    cy.xpath(this.AddAdminRole_AccessReports).should('be.visible');
    cy.xpath(this.AddAdminRole_AccessReports).click()
    cy.xpath(this.AddAdminRole_AccessCallrecordings).should('be.visible')
    cy.xpath(this.AddAdminRole_AccessCallrecordings).click();
    cy.xpath(this.AddAdminRole_AddPermissionRoles).should('be.visible')
    cy.xpath(this.AddAdminRole_AddPermissionRoles).click()
    cy.xpath(this.AddAdminRole_AccessBillingSection).should('be.visible')
    cy.xpath(this.AddAdminRole_AccessBillingSection).click()
    cy.xpath(this.AddButton).should('be.visible');
    cy.xpath(this.AddButton).click()
   }

   setEditRoleDescriptionFieldValidation(Description){
    cy.xpath("//p[@class='mt-1 mb-3 text-secondary'][text()='"+Description+"']").should('be.visible');
   }

   setAddAdminRole(RoleName,Description){
    this.setAddAdminRoleButton()
    this.setAddAdminRole_NameField(RoleName)
    this.setAddAdminRole_DescriptionField(Description)
    this.setSelect_Role_RadioButton()


   }

   setDeleteRole(RoleName){
    cy.xpath("//td[text()='"+RoleName+"']/../td/i[@class='fas fa-xmark ms-4 text-primary']").should('be.visible');
    cy.wait(5000)
    cy.xpath("//td[text()='"+RoleName+"']/../td/i[@class='fas fa-xmark ms-4 text-primary']").click()
   }

   setEdit_RoleName(EditRoleName){
    cy.xpath(this.RoleName_Field).should('be.visible')
    cy.xpath(this.RoleName_Field).clear();
    cy.xpath(this.RoleName_Field).type(EditRoleName)

   }

   setEdit_RoleDescription(EditRoleDescription){
    cy.xpath(this.RoleDescription_Field).should('be.visible')
    cy.xpath(this.RoleDescription_Field).clear();
    cy.xpath(this.RoleDescription_Field).type(EditRoleDescription)
   }

   setEditRoleName_Description(EditRoleName,EditRoleDescription){
    this.setEdit_RoleName(EditRoleName)
    this.setEdit_RoleDescription(EditRoleDescription)
    this.setSaveChangesButton()
    this.setSuccessMessage("Role "+EditRoleName+" has been updated successfully");
    this.setEditRoleDescriptionFieldValidation(EditRoleDescription)
   }

   setClick_Roles_UsersTab(){
    cy.xpath(this.Roles_UsersTab).should('be.visible')
    cy.xpath(this.Roles_UsersTab).click()

   }

   setClick_Roles_SettingsTab(){
    cy.xpath(this.Roles_SettingsTab).should('be.visible')
    cy.xpath(this.Roles_SettingsTab).click()
   }

   setClick_AddAdminRole(){
    cy.xpath("//button[(text()='Add Admin Role')]").should('be.visible')
    cy.xpath("//button[(text()='Add Admin Role')]").click()
   }
   setSearchGroup(GroupName){
    cy.xpath(this.SearchField1).should('be.visible')
    cy.xpath(this.SearchField1).type(GroupName)
}

   setAddUsertoRole(User){
    cy.xpath("//table[@class='table table-hover table-sm mt-3']/descendant::tr[3]/td[1]").should('be.visible')
    cy.xpath("//table[@class='table table-hover table-sm mt-3']/descendant::tr[3]/td[1]").click();
    cy.xpath(this.AddButton).should('be.visible');
    cy.xpath(this.AddButton).click()
    cy.wait(5000)
    this.setSaveChangesButton()
   
   
   }

   setAssignRole_User(User,EditRoleName){
    this.setClick_Roles_UsersTab()
    this.setClick_AddAdminRole()
    this.setAddUsertoRole(User)
    this.setSuccessMessage("Role "+EditRoleName+" has been updated successfully");
   }

   setDeleteRole_User(User,EditRoleName){
    this.setClick_Roles_UsersTab()
    this.setDeleteRole(User);
    this.setSaveChangesButton()
    this.setSuccessMessage("Role "+EditRoleName+" has been updated successfully");
    this.setUsersTab()
    this.setPermissionTab()
    this.setSearchGroup(EditRoleName)
    cy.xpath("//td[text()='"+EditRoleName+"']/../td[4]").invoke('text').should('eq',"0");
   }


   setAddnumbersbutton(){
    cy.xpath(this.CallingSMS_AddNumbers).scrollIntoView()
    cy.xpath(this.CallingSMS_AddNumbers).should('be.visible')
    cy.xpath(this.CallingSMS_AddNumbers).click();
}

setSelectAddNumbers(){
    cy.xpath(this.SelectNumbers).then(($listItems) => {
        const specificElement = $listItems.eq(0);
        cy.wrap(specificElement).click()
    })
}

setAddNumberValidation(){
    cy.xpath(this.TelephoneNumbersField).should('be.visible');
 }

 setSelectCallingPermission(PermissionType){
    cy.xpath(this.CallingSMS_CallingPermision).scrollIntoView()
    cy.xpath(this.CallingSMS_CallingPermision).should('be.visible');
    cy.xpath(this.CallingSMS_CallingPermision).select(PermissionType)
 }

    setEditCalllingSMSSettings(PermissionType,Alert){
        this.setAddnumbersbutton()
        this.setSelectAddNumbers()
        this.setAddButton()
        this.setAddNumberValidation()
        this.setSelectCallingPermission(PermissionType)
        this.setSaveChangesButton()
        cy.wait(3000)
        this.setSuccessMessage(Alert);
    }

    setClickConfernceBridge(){
        cy.xpath(this.ConferenceRadioButton).scrollIntoView()
        cy.xpath(this.ConferenceRadioButton).should('be.visible')
        cy.xpath(this.ConferenceRadioButton).click();
    }

    setSendConferenceName(ConferenceName){
        cy.xpath(this.ConferenceName).should('be.visible')
        cy.xpath(this.ConferenceName).clear()
        cy.xpath(this.ConferenceName).type(ConferenceName)
    }

    setConfernceExetnsion(ConferencExtension){
        cy.xpath(this.ConferenceExtension).should('be.visible')
        cy.xpath(this.ConferenceExtension).clear()
        cy.xpath(this.ConferenceExtension).type(ConferencExtension)

    }

    setConferenceAddnumbersbutton(){
        cy.xpath(this.Conference_AddNumbers).should('be.visible')
        cy.xpath(this.Conference_AddNumbers).click();
    }

    setConferncePin(ConferencePin){
        cy.xpath(this.ConferencePin).should('be.visible')
        cy.xpath(this.ConferencePin).clear()
        cy.xpath(this.ConferencePin).type(ConferencePin)

    }

    setEditConfernceBridgeSettings(EditFirstName,EditEmail,ConferenceName,ConferencExtension,ConferencePin,Alert){
     this.setUsersTab()
     this.setSearch(EditFirstName)
     this.setSelectUser(EditEmail)
     this.setClickConfernceBridge()
     this.setSendConferenceName(ConferenceName)
     this.setConfernceExetnsion(ConferencExtension)
     this.setConferenceAddnumbersbutton()
     this.setSelectAddNumbers()
     this.setAddButton()
     this.setConferncePin(ConferencePin)
     this.setSaveChangesButton()
     cy.wait(3000)
    this.setSuccessMessage(Alert);
    cy.xpath(this.ConferencePin).should('be.visible')


    }

    setEditVoicemailSettings(VoicemailPin){
        cy.xpath(this.VoicemailPin).scrollIntoView()
        cy.xpath(this.VoicemailPin).should('be.visible')
        cy.xpath(this.VoicemailPin).clear()
        cy.xpath(this.VoicemailPin).type(VoicemailPin)

    }

    setVoiceMailPinValidation(VoicemailPin){
        cy.xpath(this.VoicemailPin).scrollIntoView()
        cy.xpath(this.VoicemailPin).should('be.visible')
        cy.xpath(this.VoicemailPin).invoke('attr', 'value').should('eq',VoicemailPin);
    }

}

export default Users;