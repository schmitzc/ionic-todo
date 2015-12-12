'use strict';

var path = require('path');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  it('should create the initial project', function () {
    return driver
      .elementByCss('.project-title').type('Tests')
      .elementByCss('.button-positive').click()
      .elementByCss('.active-project-title').text()
      .should.become('Tests');
  });

  it('should create a task', function() {
    return driver
      .elementByCss('.open-new-task').click();
  });
});
