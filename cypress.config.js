const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 25000,
    baseUrl: 'https://safesupplier-registration-main.alcumusdev.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
