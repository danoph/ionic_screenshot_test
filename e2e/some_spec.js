//import { browser, element, by, $, $$ } from 'protractor';
var fs = require('fs');
//var wd = require('wd');

describe('something', () => {
  //var myBrowser = wd.promiseChainRemote();

  it('does stuff', () => {
    //print(XCUIApplication().debugDescription)
    //console.log(browser);
    console.log('wdBrowser', wdBrowser);
    //console.log('myBrowsewr', myBrowser);

    //const usernameInput = wdBrowser.elementByAccessibilityId('txtUsername');
    //console.log('usernameInput', usernameInput);

    //usernameInput.sendKeys('hello world');

    browser.sleep(5000).then(() => {
      console.log('done!');
    });

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
