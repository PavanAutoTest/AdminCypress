const fs = require('fs');

const reportDirectory = Cypress.env('reportDirectory');

// Update the cypress.json configuration
const cypressConfig = JSON.parse(fs.readFileSync('cypress.json'));
cypressConfig.env.reportDirectory = reportDirectory;

fs.writeFileSync('cypress.json', JSON.stringify(cypressConfig, null, 2));

console.log(`cypress.json updated with dynamic report directory: ${reportDirectory}`);
