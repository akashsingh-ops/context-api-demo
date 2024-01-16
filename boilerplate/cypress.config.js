const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8a1ds4",

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
