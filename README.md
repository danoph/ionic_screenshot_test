This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


Mobile screenshots notes

npm i -g appium
npm i wd wd-bridge --save-dev
brew install carthage

https://github.com/angular/webdriver-js-extender/blob/master/lib/index.ts#L8

https://github.com/admc/wd/blob/master/doc/api.md


ProtractorBrowser {
  controlFlow: [Function],
  schedule: [Function],
  setFileDetector: [Function],
  getExecutor: [Function],
  getSession: [Function],
  getCapabilities: [Function],
  quit: [Function],
  actions: [Function],
  touchActions: [Function],
  executeScript: [Function],
  executeAsyncScript: [Function],
  call: [Function],
  wait: [Function],
  sleep: [Function],
  getWindowHandle: [Function],
  getAllWindowHandles: [Function],
  getPageSource: [Function],
  close: [Function],
  getCurrentUrl: [Function],
  getTitle: [Function],
  findElementInternal_: [Function],
  findElementsInternal_: [Function],
  takeScreenshot: [Function],
  manage: [Function],
  switchTo: [Function],
  driver:
   thenableWebDriverProxy {
     flow_:
      ControlFlow {
        propagateUnhandledRejections_: true,
        activeQueue_: [Object],
        taskQueues_: [Object],
        shutdownTask_: null,
        hold_: [Object] },
     session_:
      ManagedPromise {
        flow_: [Object],
        stack_: null,
        parent_: null,
        callbacks_: null,
        state_: 'fulfilled',
        handled_: true,
        value_: [Object],
        queue_: [Object] },
     executor_: Executor { w3c: false, customCommands_: [Object], log_: [Object] },
     fileDetector_: null,
     onQuit_: undefined,
     cancel: [Function],
     then: [Function: bound then],
     catch: [Function: bound then],
     getNetworkConnection: [Function],
     setNetworkConnection: [Function],
     toggleAirplaneMode: [Function],
     toggleWiFi: [Function],
     toggleData: [Function],
     toggleLocationServices: [Function],
     getGeolocation: [Function],
     setGeolocation: [Function],
     getCurrentDeviceActivity: [Function],
     startDeviceActivity: [Function],
     getAppiumSettings: [Function],
     setAppiumSettings: [Function],
     getCurrentContext: [Function],
     selectContext: [Function],
     getScreenOrientation: [Function],
     setScreenOrientation: [Function],
     isDeviceLocked: [Function],
     lockDevice: [Function],
     unlockDevice: [Function],
     installApp: [Function],
     isAppInstalled: [Function],
     removeApp: [Function],
     pullFileFromDevice: [Function],
     pullFolderFromDevice: [Function],
     pushFileToDevice: [Function],
     listContexts: [Function],
     uploadFile: [Function],
     switchToParentFrame: [Function],
     fullscreen: [Function],
     sendAppToBackground: [Function],
     closeApp: [Function],
     getAppStrings: [Function],
     launchSession: [Function],
     resetApp: [Function],
     hideSoftKeyboard: [Function],
     getDeviceTime: [Function],
     openDeviceNotifications: [Function],
     rotationGesture: [Function],
     shakeDevice: [Function] },
  element: { [Function: element] all: [Function] },
  '$': [Function],
  '$$': [Function],
  baseUrl: 'http://localhost:8000',
  getPageTimeout: 10000,
  params: {},
  resetUrl: 'data:text/html,<html></html>',
  debugHelper: DebugHelper { browserUnderDebug_: [Circular] },
  ready:
   ManagedPromise {
     flow_:
      ControlFlow {
        propagateUnhandledRejections_: true,
        activeQueue_: [Object],
        taskQueues_: [Object],
        shutdownTask_: null,
        hold_: [Object] },
     stack_: null,
     parent_: null,
     callbacks_: null,
     state_: 'fulfilled',
     handled_: true,
     value_: [Circular],
     queue_: null },
  trackOutstandingTimeouts_: true,
  mockModules_:
   [ { name: 'protractorBaseModule_',
       script: [Function],
       args: [Array] } ],
  ExpectedConditions: ProtractorExpectedConditions { browser: [Circular] },
  plugins_:
   Plugins {
     setup: [Function],
     onPrepare: [Function],
     teardown: [Function],
     postResults: [Function],
     postTest: [Function],
     onPageLoad: [Function],
     onPageStable: [Function],
     waitForPromise: [Function],
     waitForCondition: [Function],
     pluginObjs: [],
     assertions: {},
     resultsReported: false },
  allScriptsTimeout: 11000,
  getProcessedConfig: [Function],
  forkNewDriverInstance: [Function],
  restart: [Function],
  restartSync: [Function],
  internalRootEl: '',
  internalIgnoreSynchronization: false }

  https://github.com/angular/protractor/blob/master/docs/mobile-setup.md

https://github.com/angular/protractor/blob/master/docs/mobile-setup.md

android steps:
- npm install -g appium --no-shrinkwrap
- android list avd
- install a new virtual device

https://moduscreate.com/blog/hybrid-application-testing-with-protractor-and-appium/
capabilities: {
        browserName: '',
        app: '[ABSOLUTE_PATH_TO_APK/ABSOLUTE_PATH_TO_APP]',
        bundleId: '[com..],
        deviceName: '[ACTUAL_DEVICE_NAME]',
        platformName: '[Android/iOS]',
        platformVersion: '[ANDROID_VERSION/iOS_VERSION]',
        udid: '[ONLY_FOR_iOS=THE_UDID_OF_DEVICE]'
        autoWebview : true,
        autoWebviewTimeout: 10000,
        autoAcceptAlerts: 'true'
    },
