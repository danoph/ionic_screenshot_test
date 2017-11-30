// configuring wd in onPrepare
// wdBridge helps to bridge wd driver with other selenium clients
// See https://github.com/sebv/wd-bridge/blob/master/README.md
exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: [
    'e2e/*_spec.js'
  ],

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    automationName: 'XCUITest',
    app: '/Users/daniel/workspace/member-ionic3/platforms/ios/build/emulator/MyApp.app',
    browserName: '',
    //browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '11.1',
    deviceName: 'iPhone Simulator',
  },

  baseUrl: 'http://localhost:8000',

  onPrepare: function () {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  }
};
