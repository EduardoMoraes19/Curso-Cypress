const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ticket-box.s3.eu-central-1.amazonaws.com",
  },
});
