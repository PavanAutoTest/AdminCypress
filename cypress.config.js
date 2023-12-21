const { defineConfig } = require("cypress");
const now = new Date();
  const formattedDateTime = `${now.getFullYear()}_${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}_${now
    .getDate()
    .toString()
    .padStart(2, "0")}_${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
    console.log(`PATH--->${process.env.targetEnvironment}`)
    const dynamicReportPath = `V:\\AdminReact\\TestReports\\${process.env.targetEnvironment}_${formattedDateTime}`;
module.exports = defineConfig({
  
  
  reporter: 'cypress-mochawesome-reporter', //for Html reports 
  reporterOptions: {
    "reportDir" :dynamicReportPath,  
    "quiet" : false,
    "saveAllAttempts" : true,
    "overwrite": false,
    "timestamp": "ddmmyyyy_HHMMss"
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      if(config.env.CI){
        return{
          //excludeSpecPattern:['cypress/e2e/all.cy.js']
          
        }
      }
      
    },
    //excludeSpecPattern : process.env.CI ? 'cypress/e2e/all.cy.js' :[],
    specPattern: 'cypress/e2e/all.cy.js',
   
   
    testIsolation: false,
    
  },
 
});
