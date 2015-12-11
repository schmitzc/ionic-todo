'use strict';

var path = require("path");

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  it("should have title 'Todo'", function () {
    return driver.title().should.become('Todo');
  });
});
