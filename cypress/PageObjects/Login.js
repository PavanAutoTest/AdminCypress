class Login{



    Username="//input[@id='form1']";
    NextButton="//button[text()='Next']";
    Password="//input[@id='form2']";
    LoginButton="//button[text()='Login']";
    InvalidAlert="//div[text()='Invalid email or password']"


    setUserName(username){
        console.log(`&&&UserName----${username}`)
        cy.addContext(`&&&UserName----${username}`);
        cy.xpath(this.Username).clear();
       cy.xpath(this.Username).type(username)
       cy.xpath(this.NextButton).should('be.visible')
       cy.xpath(this.NextButton).click();
      
      
    }

    setPassword(password){
        cy.xpath(this.Password).should('be.visible')
        cy.xpath(this.Password).type(password)
        cy.addContext(`&&&UserName----${password}`);
    }




    setLoginbutton(){
        cy.xpath(this.LoginButton).click(); 
    }

    setInvalidAlertValidation(){
        cy.xpath(this.InvalidAlert).should('be.visible')
    }
}

export default Login;

