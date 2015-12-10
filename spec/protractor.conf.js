exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8100',

  specs: [
    'e2e/**/*.spec.js'
  ],

  jasmineNodeOpts: {
    isVerbose: true
  }
};
