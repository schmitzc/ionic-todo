'use strict';

module.exports = function(callback) {
  require('colors');
  var wd = require("wd");
  var path = require("path");
  var chai = require("chai");
  var chaiAsPromised = require("chai-as-promised");

  chai.use(chaiAsPromised);
  should = chai.should();
  chaiAsPromised.transferPromiseness = wd.transferPromiseness;

  var appiumServer = {
    host: "localhost",
    port: 4723
  };

  var iosCapabilities = {
    browserName: "",
    autoWebview: true,
    platformName: "iOS",
    platformVersion: "9.2",
    deviceName: "iPhone 6",
    app: path.resolve("platforms/ios/build/emulator/Todo.app")
  };

  var androidCapabilities = {
    browserName: "",
    autoWebview: true,
    platformName: 'Android',
    platformVersion: '6',
    deviceName: 'Nexus_6_API_23',
    chromedriverExecutable: "/usr/local/bin/chromedriver",
    app: path.resolve("platforms/android/build/outputs/apk/android-debug.apk")
  };

  var capabilities = (process && process.env && process.env.PLATFORM === 'ios') ? iosCapabilities : androidCapabilities;

  describe('Initiate tests', function() {
    this.timeout(300000);
    var driver = wd.promiseChainRemote(appiumServer);

    before(function() {
      driver.on('status', function (info) {
        console.log(info.cyan);
      });
      driver.on('command', function (meth, path, data) {
        console.log(' > ' + meth.yellow, path.grey, data || '');
      });
      driver.on('http', function (meth, path, data) {
        console.log(' > ' + meth.magenta, path, (data || '').grey);
      });

      return driver.init(capabilities);
    });

    after(function () {
      return driver.quit();
    });

    callback(driver);
  });
};
