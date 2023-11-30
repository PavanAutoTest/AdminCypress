import Home from "../PageObjects/Home.js";
import PhoneSystem from "../PageObjects/PhoneSystem.js"
import Users from "../PageObjects/Users.js"
import CustomizedFunctions from "../PageObjects/CustomizedFunctions.js"

const home=new Home();
const phonesystem=new PhoneSystem();
const users=new Users();
const custom=new CustomizedFunctions();


describe('PhoneNumberValidation',()=>{
let Quantity=1;

beforeEach(() => {
        
  cy.viewport('macbook-15'); 
  
});

    it('PurchasePhoneNumber',()=>{
        home.setHomeTab();
        home.setPurchaseNumbers();
        phonesystem.setPhoneNumbers();
        cy.then(() =>{
          return  phonesystem.getUnassignedNumbersCount();
        })
        .then((anotherResult) =>{
          cy.addContext(`Before  Count of Unassigned Numbers----> ${anotherResult}`);
            phonesystem.setPurchase();
            phonesystem.setSelectPurchaseNumber_SelectState();
            phonesystem.setSelectPurchaseNumber_SelectCode();
            phonesystem.setSelectPurchaseNumber_SelectNXX();
            phonesystem.setPurchaseNumberQuantityField(Quantity);
            phonesystem.setPurchaseNumber_SelectbillingGroups();
            phonesystem.setclickPhoneNumberPurchaseButton();
            return cy.wrap(anotherResult);
        })
        .then((anotherResult) =>{
            users.setUserCreationSuccessMessage("Phone Number Purchased successfully")
            return cy.wrap(anotherResult);
        })
        .then((anotherResult)=>{
            phonesystem.setUnassignedNumbersCountValidation(anotherResult,'purchase')
        })

       

    }) //ending It Block


    it('DeletePhoneNumber',()=>{
        home.setHomeTab();
        home.setManageExistingNumbers();
        phonesystem.setPhoneNumbers();
        cy.then(() =>{
            return  phonesystem.getUnassignedNumbersCount();
          })
          .then((anotherResult1) =>{
            cy.addContext(`Before  Count of Unassigned Numbers---->  ${anotherResult1}`);
            phonesystem.setDeletePhoneNumber();
            users.setRemoveConfirmButton();
            return cy.wrap(anotherResult1);
          })
          .then((anotherResult1) =>{
            users.setUserCreationSuccessMessage("Phone Number deleted successfully!")
            return cy.wrap(anotherResult1);
          })
          .then((anotherResult1) =>{
            phonesystem.setUnassignedNumbersCountValidation(anotherResult1,'')
          })
          //cy.wait(300000)

    })

    



})  //ending Describe Block