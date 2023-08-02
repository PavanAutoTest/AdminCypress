class Users{

    AddUsersButton="//h5[@class='w-100 dblock']/button[contains(text(),'+ ')]";
    FirstNameField="//div[@class='form pt-2 w-100']/input";
    LastNameField="//strong[text()='Last Name']/../../div[@class='form pt-2']";
    EmailAdressField="//strong[text()='Email Address']/../following::div[@class='form pt-2 ']/input";
    CloseButton="//button[text()='Close']";

    setAddUsersbutton(){
        cy.xpath(this.AddUsersButton).click();

    }

    setAddUser_FirstNameField(){
        cy.xpath(this.FirstNameField).type("vamsireddy")
    }

    setAddUser_LastNameField(){
        cy.xpath(this.LastNameField).type("Dwarampudi")
    }

    setAddUser_EmailAddressField(){
        cy.xpath(this.EmailAdressField).type("automation@pandorarndlabs.com")
    }

    setCloseButton(){
        cy.xpath(this.CloseButton).click();
    }
}

export default Users;