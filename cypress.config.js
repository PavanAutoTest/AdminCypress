const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for Html reports
  reporterOptions: {
    "reportDir" : "V:\\CypressAutomation\\cypress\\reports\\html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      if(config.env.CI){
        return{
          excludeSpecPattern:['cypress/e2e/all.cy.js']
        }
      }
    },
    excludeSpecPattern : process.env.CI ? 'cypress/e2e/all.cy.js' :[],
    testIsolation: false,
  },
});
