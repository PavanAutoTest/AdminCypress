describe('My Cypress Test', () => {
    it('should make a GET request and log the response', () => {
      // Making a GET request and printing the response
      cy.request('http://localhost:7070/api/user/2930/yxrkfkmyw@saasone')
        .then((response) => {
          // Log the entire response to the Cypress Command Log
          console.log('Response:', response);
          console.log('Status Code:', response.status);
          console.log('Response Body:', response.body);
          cy.addContext(`Response:${response}`);
  
          // You can also log specific properties of the response
          cy.addContext(`Status Code:${response.status}`);
          cy.addContext(`Response Body:${response.body}`);
  
          // Add more logging or assertions as needed
          cy.wait(200000)
        });
    });
  });
  