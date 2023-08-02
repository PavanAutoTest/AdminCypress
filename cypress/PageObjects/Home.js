class Home{

    HomeTab="//i[@class='home']";
    AddNewUser="//a[@class='link'][text()='Add New User']";
    ManageExistingUser="//a[@class='link'][text()='Manage Existing User']";
    ManageExistingNumbers="//a[@class='link'][text()='Manage Existing Numbers']";
    PortORValidateNumbers="//a[@class='link'][text()='Port or Validate Numbers']";
    PurchaseNumbers="//a[@class='link'][text()=Purchase Numbers']";
    ManageExistingHuntGroups="//a[@class='link'][text()='Manage Existing Hunt Groups']"
    AddHuntGroup="//a[@class='link'][text()='Add Hunt Group']"
    ManageExistingCallQueues="//a[@class='link'][text()='Manage Existing Call Queues']"
    AddCallQueues="//a[@class='link'][text()='Add Call Queues']"
    ManageExistingAutoAttendants="//a[@class='link'][text()='Manage Existing Auto-Attendants']"
    AddAutoAttendants="//a[@class='link'][text()='Add Auto-Attendants']"
    ManageGreetings="//a[@class='link'][text()='Manage Greetings']"
    ManageExistingDevices="//a[@class='link'][text()='Manage Existing Devices']"
    AddDevice="//a[@class='link'][text()='Add Device']"
    DeviceStatus="//a[@class='link'][text()='Device Status']"
    IPPhoneSecurity="//a[@class='link'][text()='IP Phone Security']"
    StreamsAPPSecurity="//a[@class='link'][text()='Streams App Security']"
    BillingAccountInfo="//a[@class='link'][text()='Billing Account Info']"
    UpdatePaymentInfo="//a[@class='link'][text()='Update Payment Info']"
    BillingGroups="//a[@class='link'][text()='Billing Groups']"


    setHomeTab(){
        cy.xpath(this.HomeTab).click();
    }

    setAddNewUser(){
        cy.xpath(this.AddNewUser).should('have.text','Add New User');
        cy.xpath(this.AddNewUser).click();
        
        
        
    }

    setManageExistingUser(){
        cy.xpath(this.ManageExistingUser).should('have.text','Manage Existing User');
        cy.xpath(this.ManageExistingUser).click();
    }

    setManageExistingNumbers(){
        cy.xpath(this.ManageExistingNumbers).should('have.text','Manage Existing Numbers');
        cy.xpath(this.ManageExistingNumbers).click();
    }

    setPortORValidateNumbers(){
        cy.xpath(this.PortORValidateNumbers).should('have.text','Port or Validate Numbers');
        cy.xpath(this.PortORValidateNumbers).click();
    }

    setPurchaseNumbers(){
        cy.xpath(this.PurchaseNumbers).should('have.text','Purchase Numbers');
        cy.xpath(this.PurchaseNumbers).click();
    }

    setManageExistingHuntGroups(){
        cy.xpath(this.ManageExistingHuntGroups).should('have.text','Manage Existing Hunt Groups');
        cy.xpath(this.ManageExistingHuntGroups).click();
    }

    setAddHuntGroup(){
        cy.xpath(this.AddHuntGroup).should('have.text','Add Hunt Group');
        cy.xpath(this.AddHuntGroup).click();
    }

    setManageExistingCallQueues(){
        cy.xpath(this.ManageExistingCallQueues).should('have.text','Manage Existing Call Queues');
        cy.xpath(this.ManageExistingCallQueues).click();
    }

    setAddCallQueues(){
        cy.xpath(this.AddCallQueues).should('have.text','Add Call Queues');
        cy.xpath(this.AddCallQueues).click();
    }

    setManageExistingAutoAttendants(){
        cy.xpath(this.ManageExistingAutoAttendants).should('have.text','Manage Existing Auto-Attendants');
        cy.xpath(this.ManageExistingAutoAttendants).click();
    }

    setAddAutoAttendants(){
        cy.xpath(this.AddAutoAttendants).should('have.text','Add Auto-Attendants');
        cy.xpath(this.AddAutoAttendants).click();
    }

    setManageGreetings(){
        cy.xpath(this.ManageGreetings).should('have.text','Manage Greetings');
        cy.xpath(this.ManageGreetings).click();
    }

    setManageExistingDevices(){
        cy.xpath(this.ManageExistingDevices).should('have.text','Manage Existing Devices');
        cy.xpath(this.ManageExistingDevices).click();
    }

    setAddDevice(){
        cy.xpath(this.AddDevice).should('have.text','Add Device');
        cy.xpath(this.AddDevice).click();
    }

    setDeviceStatus(){
        cy.xpath(this.DeviceStatus).should('have.text','Device Status');
        cy.xpath(this.DeviceStatus).click();
    }

    setIPPhoneSecurity(){
        cy.xpath(this.IPPhoneSecurity).should('have.text','IP Phone Security');
        cy.xpath(this.IPPhoneSecurity).click();
    }

    setStreamsAPPSecurity(){
        cy.xpath(this.StreamsAPPSecurity).should('have.text','Streams App Security');
        cy.xpath(this.StreamsAPPSecurity).click();
    }


    setBillingAccountInfo(){
        cy.xpath(this.BillingAccountInfo).should('have.text','Billing Account Info');
        cy.xpath(this.BillingAccountInfo).click();
    }

    setUpdatePaymentInfo(){
        cy.xpath(this.UpdatePaymentInfo).should('have.text','Update Payment Info');
        cy.xpath(this.UpdatePaymentInfo).click();
    }

    setBillingGroups(){
        cy.xpath(this.BillingGroups).should('have.text','Billing Groups');
        cy.xpath(this.BillingGroups).click();
    }
    
}

export default Home;