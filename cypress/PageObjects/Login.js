class Login{

    Username="//input[@class='form-control mb-4']";
    NextButton="//button[text()='Next']";
    Password="//input[@type='password']";
    LoginButton="//button[text()='Login']";


    setUserName(){
       cy.xpath(this.Username).type("abc")
       cy.xpath(this.NextButton).click();
      
    }

    setPassword(){
        cy.xpath(this.Password).type("abc")
    }

    setLoginbutton(){
        cy.xpath(this.LoginButton).click(); 
    }
}

export default Login;

