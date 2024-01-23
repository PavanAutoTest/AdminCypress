class PhoneSystem{
    PhoneSystemTab="//i[@class='Phone_system']"
    ADDHuntGroup="//button[text()='Add Hunt Group']";
    HuntGroupNameField="//strong[text()='Hunt Group Name']/../following::div[@class='form pt-1']/input"
    Extension="//input[@name='extension']"
    AccountInfo="//li[@class='sidenav-item']/a/span[text()='Account Info']"
    PhoneNumbers="//li[@class='sidenav-item']/a/span[text()='Phone Numbers']"
    CallFlows="//li[@class='sidenav-item']/a/span[text()='Call Flows']"
    SpamBlocking="//li[@class='sidenav-item']/a/span[text()='Spam & Blocking']"
    AutoAttendants="//li[@class='sidenav-item']/a/span[text()='Auto Attendants']"
    HuntGroups="//li[@class='sidenav-item']/a/span[text()='Hunt Groups']"
    ACDQueues="//li[@class='sidenav-item']/a/span[text()='ACD Queues']"
    FAXGroups="//li[@class='sidenav-item']/a/span[text()='Fax Groups']"
    IPPhoneandDevices="//li[@class='sidenav-item']/a/span[text()='IP Phone and Devices']"
    Medialibrary="//li[@class='sidenav-item']/a/span[text()='Media Library']"
    UnassignedPhoneNumbers="//ul[@class='nav nav-tabs mb-3']/li/a[contains(text(),'Unassigned')]"
    AssignedPhoneNumbers="//ul[@class='nav nav-tabs mb-3']/li/a[contains(text(),'Assigned')]"
    Purchase="//ul[@class='nav nav-tabs mb-3']/li/a[contains(text(),'Purchase')]"
    SearchField="//label[@class='form-label'][text()='Search']/../input"
    RemoveHuntGroup="//a[@class='ms-4']"
    AutoAssign="//div[text()='Extension']/../descendant::div/input"
    SaveChangesButton="//button[@role='button'][text()='Save Changes']"
    AddNumbersButton="//div[text()='Telephone Numbers']/../descendant::button[text()='Add Numbers']"
    AddNumbersButton_AutoAttendant="//div[text()='Telephone Numbers']/../div/button[text()='Add Numbers']"
    SelectNumbers="//div[@class='chips chips-placeholder']/div[@class='numberadd']"
    AddButton="//button[text()='Add']";
    TelephoneNumbersField="//div[@class='chip chip-sm m-chip d-inline py-2 px-3']"
    NoMatchingResultsFould="//td[@class='text-center'][text()='No matching results found']"
    ADDAutoAttendant="//button[text()='Add Auto-Attendant']"
    AutoAttendantGroupNameField="//strong[text()='Auto-Attendant Name']/../following::div[@class='form pt-1']/input"
    RemoveAutoAttendantGroup="//tbody[@class='datatable-body']/descendant::a"
    PurchaseNumber_SelectCode="//label[text()='Code']/../descendant::div/descendant::select"
    PurchaseNumber_SelectState="//label[text()='State']/../descendant::div/descendant::select"
    RemoveConfirmButton="//button[@class='ripple ripple-surface btn btn-primary'][text()='Remove']"
    PurchaseNumber_SelectNXX="//label[text()='NXX']/../descendant::div/descendant::select"
    PurchaseNumber_SelectbillingGroups="//label[text()='Billing Groups']/../descendant::div/descendant::select"
    PurchaseNumber_QuantityField="//span[text()='Quantity']/../descendant::div/input"
    PhoneNumber_PurchaseButton="//button[text()='Purchase']"
    LoadingClass="//div[@class='tab-pane fade show active']/div[@class='loadingclass']"
    DeletePhoneNumbers="//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr[1]/td[5]/a"
    Routing_RingDistribution="//div[text()='Ring Distribution']/../descendant::select"
    Routing_OverallRingtime="//div[text()='Over All RingTime']/../descendant::input"
    Routing_IfBusyNoAnswer="//div[text()='If Busy  :  No Answer']/../descendant::input[@class='form-control active autocomplete-input']"
    Routing_PerSequenceRingingTime="//div[text()='Per Sequence Ring Time']/../descendant::input"
    AlertSuccessMessage="//span[@class='alert-msg']"
    Voicemail_Pin="//input[@name='voice_mail.vm_pin']"
    Voicemail_PlayMessageTimeStamp="//div[@class='tel-numbers'][text()='Play Message Timestamp']/../descendant::span[@class='slider round']"
    Voicemail_EmailNotification="//div[@class='tel-numbers'][text()='Email Notification']/../descendant::span[@class='slider round']"
    Voicemail_DeleteAfterSendingMessages="//div[@class='tel-numbers'][text()='Delete After Sending Message']/../descendant::span[@class='slider round']"
    Voicemail_IncludeTranscriptEmail="//div[@class='tel-numbers'][text()='Include Transcript in Email']/../descendant::span[@class='slider round']"
    Voicemail_Broadcastvoicemail="//div[@class='tel-numbers'][text()='Boardcast Voicemails to Enter Account']/../descendant::span[@class='slider round']"
   VoicemailEmailAdress="//input[@name='voice_mail.email_address']"
   AA_DialByNameDirectories="//a[@class='nav-link'][text()='Dial By Name Directories']"
   AA_Settings="//a[@class='nav-link'][text()='Settings']"
   AddDirectoryList="//button[text()='Add Directory List']"
   DirectotyName="//p[text()='Directory Name']/../descendant::input"
   DirectoryType="//p[text()='Directory Type']/../descendant::select"
   PhoneNumber_Search="//div[@class='tab-pane fade show active']/descendant::input[1]"
   DeviceMap="//a[@class='nav-link'][text()='Device Map']"
   PagingGroups="//a[@class='nav-link'][text()='Paging Groups']"
   BLFGroups="//a[@class='nav-link'][text()='BLF Groups']"
   IPPhone_Devices="//a[@class='nav-link'][text()='IP Phones & Devices']"
   AddPagingGroupButton="//button[text()='Add Paging Group']"
   PagingGroupNameField="//strong[text()='Paging Group Name']/../following::div/input[@name='groupname']"
   GroupID="//strong[text()='Group ID']/../following::div/input[@name='groupno']"
   AddBLFGroupButton="//button[text()='Add BLF Group']"
   BLFGroupNameField="//strong[text()='BLF Group Name']/../div/input[@type='text']"
   IPPhone_Devices_Assigned="//li[@class='nav-item']/a[text()='Assigned']"
   IPPhone_Devices_UnAssigned="//li[@class='nav-item']/a[text()='Unassigned']"
   

    setAddHuntGroupNameField(GroupName){
        cy.xpath(this.HuntGroupNameField).should('be.visible')
        cy.xpath(this.HuntGroupNameField).type(GroupName)
    }


    setExtensionFieldField(Extension){
        cy.xpath(this.Extension).should('be.visible')
        cy.xpath(this.Extension).type(Extension)
    }

    setAutoAttendantGroupNameField(GroupName){
        cy.xpath(this.AutoAttendantGroupNameField).should('be.visible')
        cy.xpath(this.AutoAttendantGroupNameField).type(GroupName)
    }

    setClickPhoneSystemTab(){
        cy.xpath(this.PhoneSystemTab).should('be.visible')
        cy.xpath(this.PhoneSystemTab).click();
    }


    setAutoAttendants(){
        cy.xpath(this.AutoAttendants).should('be.visible')
        cy.xpath(this.AutoAttendants).click();
    }

    setADDHuntGroup(){
        cy.xpath(this.ADDHuntGroup).should('be.visible')
        cy.xpath(this.ADDHuntGroup).click();

    }

    setADDAutoAttendantGroup(){
        cy.xpath(this.ADDAutoAttendant).should('be.visible')
        cy.xpath(this.ADDAutoAttendant).click();

    }

    setSearchGroup(GroupName){
        cy.xpath(this.SearchField).should('be.visible')
        cy.xpath(this.SearchField).type(GroupName)
    }

    setSelectGroup(GroupName){
        cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+GroupName+"']").should('be.visible')
        cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+GroupName+"']").click();
       }

       setRemoveButton(){
        cy.xpath(this.RemoveAutoAttendantGroup).click();
    }

    setRemoveConfirmButton(){
        cy.xpath(this.RemoveConfirmButton).should('be.visible');
        cy.xpath(this.RemoveConfirmButton).click();
    }

    setRemoveAutoAttendantButton(){
        cy.xpath(this.RemoveAutoAttendantGroup).should('be.visible')
        cy.xpath(this.RemoveAutoAttendantGroup).click();
    }

    setAutoAssignCheckbox(){
        cy.xpath(this.AutoAssign).then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).click()
        })
    }

    setSaveChangesButton(){
        cy.xpath(this.SaveChangesButton).then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).click()
        })
    }


    setAddnumbersbutton(Value){
        cy.xpath(this.AddNumbersButton).should('be.visible')
        cy.xpath(this.AddNumbersButton).click();
    }

    setAddnumbersbutton_AutoAttendant(){
        cy.xpath(this.AddNumbersButton).should('be.visible')
        cy.xpath(this.AddNumbersButton).click();
    }

    setSelectAddNumbers(){
      cy.wait(2000)
        cy.xpath(this.SelectNumbers).then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).click()
        })
    }

    setAddButton(){
        cy.xpath(this.AddButton).then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).click()
        })
    }

    setAddNumberValidation(){
       cy.xpath(this.TelephoneNumbersField).should('be.visible');
    }





     getAuttoAssignedFieldText(HuntGroupName)  {
        console.log(new Date())
        let autoAssignedText
        cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+HuntGroupName+"']/../td[2]").should('be.visible')

         .then(function(text2){
              autoAssignedText = text2.text();
            console.log(`The AutoAssignedText is:${autoAssignedText}`)
            console.log(new Date())
            return autoAssignedText;
                      
        })
              
    } 

    
   
   
     

   


     getAutoAssignedFieldText(HuntGroupName) {
        // Return a promise that resolves with the autoAssignedText
        return new Promise((resolve) => {
          cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+HuntGroupName+"']/../td[3]")
            .should('be.visible')
            .then(() => {
              // Use invoke to get the text and store it in autoAssignedText
              cy.xpath("//tbody[@class='datatable-body']/tr/td[text()='"+HuntGroupName+"']/../td[3]")
                .invoke('text')
                .then((text) => {
                  let autoAssignedText = text;
                  console.log(`The AutoAssignedText is: ${autoAssignedText}`);
                  // Resolve the promise with the autoAssignedText
                  resolve(autoAssignedText);
                })
                
            })
            
        });
      }
      

      getExetensionFieldText(value){
        cy.xpath("//p[@class='mb-1 text-secondary']").should('be.visible')
        .invoke('text').then((text) =>{
            console.log(`text is--->${text}`)
            console.log(`value--->${value}`)
           
        })
        
      }

      setExetensionFieldValidation(Extension){
        cy.xpath(this.AutoAssign).should('be.visible');
        cy.xpath(this.AutoAssign).should('have.attr','value',Extension);
        cy.xpath(this.AutoAssign).invoke('attr', 'value').then((text) =>{
            let AutoAssignvalue=text;
            cy.addContext(`The ActualAutoAssignvalue --->${AutoAssignvalue}`)
            cy.addContext(`The ExpectedAutoAssignvalue --->${Extension}`)
        })
       
       }



 setPhoneNumbers(){
        cy.xpath(this.PhoneNumbers).should('be.visible')
        cy.xpath(this.PhoneNumbers).click();
    }

    setPurchase(){
        cy.xpath(this.Purchase).should('be.visible')
        cy.xpath(this.Purchase).click();
        cy.xpath("//h5[@class='fw-600'][text()='Purchase']").invoke('text').should('eq','Purchase');
    }

    setunassigned(){
        cy.xpath(this.UnassignedPhoneNumbers).should('be.visible')
        cy.xpath(this.UnassignedPhoneNumbers).click();
        //this.setLoadingClassInvisibilty();
        cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody").should('be.visible')
    }

    setassigned(){
        cy.xpath(this.AssignedPhoneNumbers).should('be.visible')
        cy.xpath(this.AssignedPhoneNumbers).click();
        cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody").should('be.visible')
    }

    setPhoneNumberSearch(PhoneNumber){
      cy.xpath(this.PhoneNumber_Search).should('be.visible')
      cy.xpath(this.PhoneNumber_Search).type(PhoneNumber)
      cy.xpath("//tbody[@class='datatable-body']/descendant::td[contains(text(),'"+PhoneNumber+"')]").should('be.visible')
    }


    setSelectPurchaseNumber_SelectCode(){
        const partialText = '999';
        cy.xpath(this.PurchaseNumber_SelectCode).should('be.visible')
        cy.xpath(this.PurchaseNumber_SelectCode).select('1361');
       
      
        
    }

    setSelectPurchaseNumber_SelectState(){
        cy.xpath(this.PurchaseNumber_SelectState).should('be.visible')
      cy.xpath(this.PurchaseNumber_SelectState).select('1');
      cy.wait(1000)
      
        
    }

    setSelectPurchaseNumber_SelectNXX(){
        cy.xpath(this.PurchaseNumber_SelectNXX).should('be.visible')
      cy.xpath(this.PurchaseNumber_SelectNXX).select(1);
      
        
    }

    setPurchaseNumberQuantityField(Quantity){
        cy.xpath(this.PurchaseNumber_QuantityField).should('be.visible')
      cy.xpath(this.PurchaseNumber_QuantityField).clear();
      cy.xpath(this.PurchaseNumber_QuantityField).type(Quantity)
   
    }

    setPurchaseNumber_SelectbillingGroups(){
        cy.xpath(this.PurchaseNumber_SelectbillingGroups).should('be.visible')
      cy.xpath(this.PurchaseNumber_SelectbillingGroups).select(1);
      
        
    }


    setclickPhoneNumberPurchaseButton(){
        console.log(`setclickPhoneNumberPurchaseButton`)
        cy.xpath(this.PhoneNumber_PurchaseButton).should('be.visible')
        cy.xpath(this.PhoneNumber_PurchaseButton).click();
    }

    setLoadingClassInvisibilty(){
        cy.xpath(this.LoadingClass).should('not.be.visible')
    
    }



    getUnassignedNumbersCount(){
        let listLength ;
        this.setunassigned();
        cy.wait(3000)
        cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr").its('length').then((length) =>{
            listLength =length;
            console.log(`Before  Count of Unassigned Numbers---->${listLength}`)
            //cy.log(`Before  Count of Unassigned Numbers---->${listLength}`)
            return listLength;
        })
       

    }


    setUnassignedNumbersCountValidation(NumbersCount,Action){
        cy.addContext(`Enetering into setUnassignedNumbersCountValidation`)
        this.setunassigned();
        cy.wait(3000)
        if(Action === 'purchase'){
            cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr").should('have.length',NumbersCount+1);
            cy.addContext(`After Count of Unassigned Numbers---->${NumbersCount+1}`)
        }else{
            cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr").should('have.length',NumbersCount-1);
            cy.addContext(`After Count of Unassigned Numbers---->${NumbersCount-1}`)
        }
       
        
        
    }

    setDeletePhoneNumber(){
        console.log(`Clicking Delete PhoneNumbers`)
       let elementText;
        cy.xpath("//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr[1]/td[2]").invoke('text').then((text) =>{
            elementText=text.trim();
            console.log(`The First Phone Number in Table:${elementText}`)
            return elementText;
        })
        .then((elementText1) =>{
            console.log(`The First Phone Number in Table:${elementText1}`)
            cy.xpath("//div[@class='tab-pane fade show active']/descendant::label/../input").should('be.visible')
            cy.xpath("//div[@class='tab-pane fade show active']/descendant::label/../input").type(elementText1)
            cy.xpath(this.DeletePhoneNumbers).should('be.visible')
            cy.xpath(this.DeletePhoneNumbers).click();

        })
            
    }

    
     
   /*  setDeletePhoneNumber(){
        console.log(`Clicking Delete PhoneNumbers`)
        cy.wait(1000)
            cy.xpath(this.DeletePhoneNumbers).should('be.visible')
            cy.xpath(this.DeletePhoneNumbers).click();
        } */
    
        setRingDistribution(DistributionType){
            cy.xpath(this.Routing_RingDistribution).scrollIntoView();
            cy.xpath(this.Routing_RingDistribution).should('be.visible')
            cy.xpath(this.Routing_RingDistribution).select(DistributionType)
        }

        setOverAllRingTime(RingTime){
            cy.xpath(this.Routing_OverallRingtime).should('be.visible')
            cy.xpath(this.Routing_OverallRingtime).clear()
            cy.xpath(this.Routing_OverallRingtime).type(RingTime)
        }

        setIfBusyNoAnswer(VoiceMailUser){
            cy.xpath(this.Routing_IfBusyNoAnswer).should('be.visible')
            cy.wait(2000)
            cy.xpath(this.Routing_IfBusyNoAnswer).clear()
            cy.wait(2000)
            cy.xpath("//div[text()='If Busy  :  No Answer']/../descendant::input[1]").type(VoiceMailUser)
            cy.wait(2000)
            cy.xpath("//li[@class='autocomplete-item'][contains(text(),'"+VoiceMailUser+"')]").should('be.visible')
            cy.xpath("//li[@class='autocomplete-item'][contains(text(),'"+VoiceMailUser+"')]").click()
        }

        setSequenceRingTime(RingTime){
            cy.xpath(this.Routing_PerSequenceRingingTime).should('be.visible')
            cy.xpath(this.Routing_PerSequenceRingingTime).clear()
            cy.xpath(this.Routing_PerSequenceRingingTime).type(RingTime)
        }

        setSuccessMessage(Alert){
            let elementText;
            cy.get('.alert-msg').invoke('text').should('eq',Alert);
            cy.xpath(this.AlertSuccessMessage).invoke('text').then((text) =>{
                elementText=text.trim();
                cy.addContext(`The text is:${elementText}`)
                cy.addContext(`Alert:${Alert}`)
              
    
            });
          
            
        }
      
      setHunt_RoutingEdit(DistributionType,RingTime,VoiceMailUser,Alert){
        this.setRingDistribution(DistributionType)
        this.setSequenceRingTime(RingTime)
        this.setIfBusyNoAnswer(VoiceMailUser)
        cy.wait(3000)
        this.setSaveChangesButton()
        this.setSuccessMessage(Alert)
        cy.xpath("//div[text()='If Busy  :  No Answer']/../descendant::input[1]").invoke('attr','value').should('include',VoiceMailUser)

      }


      setVoicemail_pin(VoicemailPin){
        cy.xpath(this.Routing_RingDistribution).scrollIntoView();
        cy.xpath(this.Voicemail_Pin).should('be.visible')
        cy.xpath(this.Voicemail_Pin).clear()
        cy.xpath(this.Voicemail_Pin).type(VoicemailPin)


      }

      setVoicemailPlaytimeStamp(){
        cy.xpath(this.Voicemail_PlayMessageTimeStamp).should('be.visible')
        cy.xpath(this.Voicemail_PlayMessageTimeStamp).click()
      
      }

      setVoicemailEmailNotification(){
        cy.xpath(this.Voicemail_EmailNotification).scrollIntoView();
        cy.xpath(this.Voicemail_EmailNotification).should('be.visible')
        cy.xpath(this.Voicemail_EmailNotification).click()
      }

      setVoicemailEmailAddress(Email){
        cy.xpath(this.VoicemailEmailAdress).should('be.visible')
        cy.xpath(this.VoicemailEmailAdress).clear()
        cy.xpath(this.VoicemailEmailAdress).type(Email)
      }

      setVoicemailDeletAfterSendingMessage(){
        cy.xpath(this.Voicemail_DeleteAfterSendingMessages).should('be.visible')
        cy.xpath(this.Voicemail_DeleteAfterSendingMessages).click()
      }

      setVoicemailIncludeTranscriptEmail(){
        cy.xpath(this.Voicemail_IncludeTranscriptEmail).should('be.visible')
        cy.xpath(this.Voicemail_IncludeTranscriptEmail).click()
      }

      setVoicemail_BoradCastVoicemails(){
        cy.xpath(this.Voicemail_Broadcastvoicemail).should('be.visible')
        cy.xpath(this.Voicemail_Broadcastvoicemail).click()
      }

      setHunt_VoicemailEdit(VoicemailPin,Email,Alert){
        cy.wait(1000)
        this.setVoicemail_pin(VoicemailPin)
        this.setVoicemailPlaytimeStamp()
        //this.setVoicemailEmailNotification()
        this.setVoicemailEmailAddress(Email)
        //this.setVoicemailDeletAfterSendingMessage()
        //this.setVoicemailIncludeTranscriptEmail()
        this.setVoicemail_BoradCastVoicemails()
        this.setSaveChangesButton()
        this.setSuccessMessage(Alert)
      }

      setAA_RoutingEdit(RoutingUser,Alert){
        cy.xpath("//div[@id='general'][text()='Routing']").scrollIntoView();
        cy.xpath("//div[@class='tel-numbers'][contains(text(),'Press')]/../descendant::input[1]").then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).clear()
        })
        cy.wait(2000)
        cy.xpath("//input[@class='form-control focused autocomplete-input']").should('be.visible')
        cy.xpath("//input[@class='form-control focused autocomplete-input']").type(RoutingUser)
        cy.wait(2000)
        cy.xpath("//li[@class='autocomplete-item'][contains(text(),'"+RoutingUser+"')]").then(($listItems) => {
            const specificElement = $listItems.eq(0);
            cy.wrap(specificElement).click()
        })
        cy.wait(2000)
        this.setSaveChangesButton()
        this.setSuccessMessage(Alert)
        cy.xpath("//input[@class='form-control active autocomplete-input']").invoke('attr','value').should('include',RoutingUser)

      }

      setNoMatchingResultsFound(){
        cy.xpath(this.NoMatchingResultsFould).should('be.visible');
      }


      setClickDialByDircetory(){
        cy.xpath(this.AA_DialByNameDirectories).should('be.visible')
        cy.xpath(this.AA_DialByNameDirectories).click()
      }

      setClickAddDirectoryList(){
        cy.xpath(this.AddDirectoryList).should('be.visible')
        cy.xpath(this.AddDirectoryList).click()
      }

      setEnterDirectoryName(DirectotyName){
        cy.xpath(this.DirectotyName).should('be.visible')
        cy.xpath(this.DirectotyName).clear()
        cy.xpath(this.DirectotyName).type(DirectotyName)
      }

      setSelectDirectoryType(DirectoryType){
        cy.xpath(this.DirectoryType).should('be.visible')
        cy.xpath(this.DirectoryType).select(DirectoryType)
      }

      setAA_ADDDialByDirectories(GroupName,DirectotyName,DirectoryType,Alert){
        this.setClickPhoneSystemTab()
        this.setAutoAttendants()
        this.setSearchGroup(GroupName)
        this.setSelectGroup(GroupName)
        this.setClickDialByDircetory()
        this.setClickAddDirectoryList()
        this.setEnterDirectoryName(DirectotyName)
       this.setSelectDirectoryType(DirectoryType)
       this.setAddButton()
       this.setSuccessMessage(Alert)
       this.setClickPhoneSystemTab()
       this.setAutoAttendants()
       this.setSearchGroup(GroupName)
       this.setSelectGroup(GroupName)
       this.setClickDialByDircetory()
       cy.xpath("//tbody[@class='datatable-body']/descendant::td[text()='"+DirectotyName+"']").should('be.visible')

      }


      setAA_DeleteDialByDirectories(GroupName,DirectotyName,Alert){
        this.setClickPhoneSystemTab()
        this.setAutoAttendants()
        this.setSearchGroup(GroupName)
        this.setSelectGroup(GroupName)
        this.setClickDialByDircetory()
        cy.xpath("//tbody[@class='datatable-body']/descendant::td[text()='"+DirectotyName+"']/../td/i").should('be.visible')
        cy.xpath("//tbody[@class='datatable-body']/descendant::td[text()='"+DirectotyName+"']/../td/i").click()
        this.setRemoveConfirmButton();
        this.setSuccessMessage(Alert)
        this.setClickPhoneSystemTab()
        this.setAutoAttendants()
        this.setSearchGroup(GroupName)
        this.setSelectGroup(GroupName)
        this.setClickDialByDircetory()
        this.setNoMatchingResultsFound()

      }


      getAddedNumber_SuccessMessage(){
        let elementText;
        cy.xpath(this.AlertSuccessMessage).invoke('text').then((text) =>{
            elementText=text.trim().replace(/\D/g, '');
            //cy.addContext(`The text is:${elementText}`)
            console.log(`The text is:${elementText}`)
            return elementText;

        });
      }
   
      setClickPagingGroupsTab(){
        cy.xpath(this.PagingGroups).should('be.visible')
        cy.xpath(this.PagingGroups).click()
      }

      setClickAddPagingGroupButton(){
        cy.xpath(this.AddPagingGroupButton).should('be.visible')
        cy.xpath(this.AddPagingGroupButton).click()
      }

      setEnterPagingGroupName(PagingGroupName){
        cy.xpath(this.PagingGroupNameField).should('be.visible')
        cy.xpath(this.PagingGroupNameField).type(PagingGroupName)

      }

      setSelectPagingGroup_ID(PagingGroupID){
        cy.xpath(this.GroupID).should('be.visible')
        cy.xpath(this.GroupID).clear()
        cy.xpath(this.GroupID).type(PagingGroupID)
      }

    

     
    
    
}


export default PhoneSystem;