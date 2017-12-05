// configuring wd in onPrepare
// wdBridge helps to bridge wd driver with other selenium clients
// See https://github.com/sebv/wd-bridge/blob/master/README.md

const { SpecReporter } = require('jasmine-spec-reporter');

const iosConfig = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: [
    'e2e/*_spec.js'
  ],

  frameworks: ['jasmine'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    //automationName: 'XCUITest',
    //automationName: 'Appium',
    //app: '/Users/daniel/workspace/member-ionic3/platforms/ios/build/emulator/MyApp.app',
    app: '/Users/danielerrante/workspace/centene/member-ionic3/platforms/ios/build/emulator/MyApp.app',
    browserName: '',
    //browserName: 'safari',
    autoWebview: true,
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

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

const androidConfig = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: [
    'e2e/*_spec.js'
  ],

  frameworks: ['jasmine'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    browserName: '',
    //browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '7.0',
    //platformVersion: '7.1.1',
    //'appium-version': '1.7.1',
    //automationName: "UiAutomator2",
    //automationName: 'uiautomator2',
    //deviceName: 'Android Emulator',
    deviceName: 'android-25',
    //'browserName': 'android'
    //deviceName: '66c4518f',
    autoWebview: true,
    //autoWebviewTimeout: 20000,
    //deviceName: 'emulator-5554',
    //deviceName: 'android-25',
    //appiumVersion: '1.7.1',
    //deviceName: 'android-24-google_apis-x86_64-v24.4.1-wd-manager',
    app: '/Users/danielerrante/workspace/centene/member-ionic3/platforms/android/build/outputs/apk/android-debug.apk'
  },
  onPrepare() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
    //require('ts-node').register({
      //project: 'e2e/tsconfig.e2e.json'
    //});
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },

  baseUrl: 'http://10.0.2.2:8000'
};

exports.config = androidConfig;
//exports.config = iosConfig;
//// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//exports.config = {
  //allScriptsTimeout: 11000,
  //specs: [
    //'./e2e/**/*.e2e-spec.ts'
  //],
  //capabilities: {
    //'browserName': 'chrome'
  //},
  //directConnect: true,
  //baseUrl: 'http://localhost:4201/',
  //framework: 'jasmine',
  //jasmineNodeOpts: {
    //showColors: true,
    //defaultTimeoutInterval: 30000,
    //print: function() {}
  //},
  //onPrepare() {
    //require('ts-node').register({
      //project: 'e2e/tsconfig.e2e.json'
    //});
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  //}
//};

