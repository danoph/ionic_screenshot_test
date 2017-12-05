//import { browser, element, by, $, $$ } from 'protractor';
var fs = require('fs');
//var wd = require('wd');

describe('something', () => {
  //let webContext;
  //var myBrowser = wd.promiseChainRemote();

  beforeEach(() => {
    //webContext = "WEBVIEW_io.ionic.starter";

    webContext = wdBrowser.contexts().then(function (ctxs) {
      console.log(ctxs); //This will give you list of all webviews in your app.
      return wdBrowser.context(ctxs[1]); //'index' of your required WebView
    })
  });

  it('does stuff', () => {
    browser.sleep(3000);

    const input = $('input[type="text"]');

    console.log('input', input);

    input.sendKeys('hello!');

    browser.sleep(3000);
    //console.log('running test!');
    //r processes. Original error: Unable to get pids for tomator2.server
    //WebDriverError: No such context found.
    //webContext.then(ctx => {
      //console.log('ctx', ctx);
    //});

    //wdBrowser.contexts().then(function (ctxs) {
      //console.log(ctxs); //This will give you list of all webviews in your app.
      //return wdBrowser.context(ctxs[index]); //'index' of your required WebView
    //})
    //print(XCUIApplication().debugDescription)
    //console.log(browser);
    //console.log('wdBrowser', wdBrowser);
    //console.log('myBrowsewr', myBrowser);
    //browser.get('');

    //browser.sleep(1000).then(() => {
      //console.log('done!');
      //const usernameInput = wdBrowser.elementByAccessibilityId('txtUsername').then(el => {
        //console.log('usernameInput', usernameInput);
        //usernameInput.sendKeys('hello world');
        //el.sendKeys('hello world');
      //});
    //});

    //console.log('usernameInput', usernameInput);

    //usernameInput.sendKeys('hello world');

    //browser.sleep(5000).then(() => {
      //console.log('done!');
    //});

    //browser.takeScreenshot().then(png => {
      //const filename = 'test-ios';

      //const stream = fs.createWriteStream(`./test/screenshots/${filename}.png`);
      //stream.write(new Buffer(png, 'base64'));
      //stream.end();
    //});

    //console.log('iosLogin'

    //expect($('body').getText()).toEqual('hello');
  });
});

//export class LoginPage {
  //usernameInput: $('.username');
//}

//export class IosLoginPage {
  //usernameInput: browser.driver.elementByAccessibilityId('txtUsername')
//}
