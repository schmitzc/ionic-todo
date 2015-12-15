'use strict';

var path = require('path');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  it('should create the initial project', function () {
    var project = 'Tests';
    return driver
      .elementByCss('.project-title').type(project)
      .elementByCss('.button-positive').click()
      .elementByCss('.active-project-title').text()
      .should.become(project);
  });

  it('should create a task', function() {
    var task = 'Write tests';
    return driver
      .elementByCss('.open-new-task').click()
      .elementByCss('.task-title').type(task)
      .elementByCss('.create-task').click()
      .elementByCss('.item').text()
      .should.become(task);
  });
});
