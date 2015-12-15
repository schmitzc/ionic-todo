'use strict';

var path = require('path');
var wd = require('wd');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  var activeProjectSelector = '.active-project-title';
  var openNewTaskSelector = '.open-new-task';
  var newTaskModal = '.new-task-modal';

  it('should create the initial project', function () {
    var project = 'Tests';

    return driver
      .elementByCss('.project-title').type(project)
      .elementByCss('.button-positive').click()
      .elementByCss(activeProjectSelector).text()
      .should.become(project);
  });

  it('should create a task', function() {
    var task = 'Write tests';

    return driver
      .elementByCss(openNewTaskSelector).click()
      .elementByCss('.task-title').type(task)
      .elementByCss('.create-task').click()
      .elementsByCss('.task').then(function(elements) {
        elements.length.should.equal(1);
        elements[0].text().should.become(task);
        return elements;
      });
  });

  it('should close the new task modal', function() {
    return driver
      .elementByCss(openNewTaskSelector).click()
      .waitForElementByCss(newTaskModal, wd.asserters.isDisplayed, 2000)
      .elementByCss('.close-new-task').click()
      .waitForElementByCss(newTaskModal, wd.asserters.isNotDisplayed, 2000);
  });

  it('should create a new project', function() {
    var project = 'Release';

    return driver
      .elementByCss('.toggle-projects-menu').click()
      .elementByCss('.open-new-project').click()
      .elementByCss('.project-title').type(project)
      .elementByCss('.create-project').click()
      .elementByCss(activeProjectSelector).text()
      .should.become(project)
      .elementsByCss('.project').then(function(elements) {
        elements.length.should.equal(2);
        elements[1].text().should.become(project);
        return elements;
      });
  });
});
