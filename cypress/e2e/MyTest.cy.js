



describe('First Test', () => { 
  it('test1', () => {
    cy.visit('http://localhost:5050/home')
    cy.get("[class='locations']").click()
    cy.get("[class='mb-0 text-left']").contains("Location")
    cy.get("#sidenav-2 > ul > li > a:nth-child(5)").click()
   cy.xpath("//h5[@class='fw-600']").contains("Add Auto-Attendant")
   cy.xpath("//div[@class='select-wrapper']").click()
   cy.xpath("//span[@class='select-option-text'][contains(text(),'200')]").click()
   cy.wait(5000)
  })

  it('test2', () => {
    cy.get("[class='analytics']").click()
    cy.xpath("//a[@class='sidenav-link list-group-item list-group-item-action ripple']/span[text()='SLA/KPI']").click()
    cy.get("[class='selectname routing-search']").select('San Jose')
    cy.wait(50000)
   
    //cy.xpath("//div[@class='select-wrapper']").click()
    //cy.xpath("//span[@class='select-option-text'][contains(text(),'200')]").click()
    //cy.get("[class*='form-control active select-input']").should('have.attr', 'value', '200')
    console.log("jhmglb")
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it('fails to visit website 1', function () {
  cy.visit('http://localhost:5050/home')
})

