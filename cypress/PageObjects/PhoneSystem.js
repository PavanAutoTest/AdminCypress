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
    AddNumbersButton="//button[text()='Add Numbers']"
    AddNumbersButton_AutoAttendant="//div[text()='Telephone Numbers']/../div/button[text()='Add Numbers']"
    SelectNumbers="//div[@class='chips chips-placeholder']/div[@class='numberadd']"
    AddButton="//button[text()='Add']";
    TelephoneNumbersField="//div[@class='chip chip-sm m-chip d-inline py-2 px-3']"
    ADDAutoAttendant="//button[text()='Add Auto-Attendant']"
    AutoAttendantGroupNameField="//strong[text()='Auto-Attendant Name']/../following::div[@class='form pt-1']/input"
    RemoveAutoAttendantGroup="//tbody[@class='datatable-body']/descendant::a"
    PurchaseNumber_SelectCode="//label[text()='Code']/../descendant::div/descendant::select"
    PurchaseNumber_SelectState="//label[text()='State']/../descendant::div/descendant::select"
    PurchaseNumber_SelectNXX="//label[text()='NXX']/../descendant::div/descendant::select"
    PurchaseNumber_SelectbillingGroups="//label[text()='Billing Groups']/../descendant::div/descendant::select"
    PurchaseNumber_QuantityField="//span[text()='Quantity']/../descendant::div/input"
    PhoneNumber_PurchaseButton="//button[text()='Purchase']"
    LoadingClass="//div[@class='tab-pane fade show active']/div[@class='loadingclass']"
    DeletePhoneNumbers="//div[@class='tab-pane fade show active']/descendant::div/table/tbody/tr[1]/td[5]/a"

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
        cy.xpath(this.RemoveHuntGroup).click();
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
        cy.xpath(this.AddNumbersButton_AutoAttendant).should('be.visible')
        cy.xpath(this.AddNumbersButton_AutoAttendant).click();
    }

    setSelectAddNumbers(){
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
    
      
      

   

     
    
    
}


export default PhoneSystem;