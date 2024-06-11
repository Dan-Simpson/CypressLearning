const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 25000,
    baseUrl: 'https://safesupplier-registration-prod.alcumus.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
