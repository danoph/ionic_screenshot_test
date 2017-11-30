//import { browser, element, by, $, $$ } from 'protractor';
var fs = require('fs');

describe('something', () => {
  it('does stuff', () => {
    //browser.get('');

    //browser.takeScreenshot().then(png => {
      //const filename = 'test-ios';

      //const stream = fs.createWriteStream(`./test/screenshots/${filename}.png`);
      //stream.write(new Buffer(png, 'base64'));
      //stream.end();
    //});

    expect($('body').getText()).toEqual('hello');
  });
});
