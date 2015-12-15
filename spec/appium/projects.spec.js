'use strict';

var path = require('path');
var wd = require('wd');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  var openNewTaskSelector = '.open-new-task';
  var newTaskModal = '.new-task-modal';

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
      .elementByCss(openNewTaskSelector).click()
      .elementByCss('.task-title').type(task)
      .elementByCss('.create-task').click()
      .elementByCss('.item').text()
      .should.become(task);
  });

  it('should close the new task modal', function() {
    return driver
      .elementByCss(openNewTaskSelector).click()
      .waitForElementByCss(newTaskModal, wd.asserters.isDisplayed, 2000)
      .elementByCss('.close-new-task').click()
      .waitForElementByCss(newTaskModal, wd.asserters.isNotDisplayed, 2000);
  });
});
