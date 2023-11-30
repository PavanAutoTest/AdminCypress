const Mochawesome = require('mochawesome');

class CustomMochawesomeReporter extends Mochawesome {
  constructor(runner, options) {
    super(runner, options);

    const logs = [];

    runner.on('test', test => {
      // Intercept cy.log statements and store them in the logs array
      cy.on('log:added', log => {
        if (log.name === 'log') {
          logs.push(log.message);
        }
      });
    });

    runner.on('end', () => {
      // Access the suite object to modify or add custom data
      const suite = this._mochawesomeReporter.suite;
      
      // Add cy.log statements to the suite's 'title' property
      suite.title += `\n\nCy.logs:\n${logs.join('\n')}`;
    });
  }
}

module.exports = CustomMochawesomeReporter;
