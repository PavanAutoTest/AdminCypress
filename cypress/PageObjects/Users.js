class Users{
    
    UsersTab="//i[@class='users_icon']"
    AddUsersButton="//h5[@class='w-100 dblock']/button[contains(text(),'+ ')]";
    FirstNameField="//div[@class='form pt-1 w-100']/input";
    LastNameField="//strong[text()='Last Name']/../../div[@class='form pt-1']";
    EmailAdressField="//strong[text()='Email Address']/../following::div[@class='form pt-1']/input";
    ExtensionField="//input[@name='extension']"
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
    PlayCallRecordingBeep="//div[text()='Play Call Recording Beep']/../div[@class='phoneselect']"
    CallRecordingPermission="//div[@class='tel-numbers'][contains(text(),'permission ')]/../descendant::select"
    CallRecordinglink="//a[@class='nav-link'][contains(text(),'Call Recording')]"


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

    setUserCreationSuccessMessage(Alert){
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
    cy.xpath(this.CallRecordinglink).should('be.visible');
    cy.xpath(this.CallRecordinglink).click();
    cy.wait(3000)
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


}

export default Users;