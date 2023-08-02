import Login from "../PageObjects/Login";





const login=new Login()

describe('AdminLogin',()=>{


    it('AdminLogin',()=>{
        cy.visit("http://localhost:5050/login")
        login.setUserName()
        login.setPassword()
        login.setLoginbutton()
    })
})