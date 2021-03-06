'use strict';

var path = require('path');
var wd = require('wd');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  var waitTimeout = 3000;
  var initialProjectTitle = 'Tests';
  var activeProjectSelector = '.active-project-title';
  var openNewTaskSelector = '.open-new-task';
  var taskTitleSelector = '.task-title';
  var taskSelector = '.task';
  var toggleProjectsSelector = '.toggle-projects-menu';
  var openNewProjectSelector = '.open-new-project';
  var projectTitleSelector = '.project-title';

  it('should create the initial project', function () {
    return driver
      .elementByCss(projectTitleSelector).type(initialProjectTitle)
      .elementByCss('.button-positive').click()
      .elementByCss(activeProjectSelector).text()
      .should.become(initialProjectTitle);
  });

  it('should create a task', function() {
    var task = 'Write tests';

    return driver
      .waitForElementByCss(openNewTaskSelector, wd.asserters.isDisplayed, waitTimeout)
      .click()
      .waitForElementByCss(taskTitleSelector, wd.asserters.isDisplayed, waitTimeout)
      .type(task)
      .elementByCss('.create-task').click()
      .elementsByCss(taskSelector).then(function(elements) {
        elements.length.should.equal(1);
        elements[0].text().should.become(task);
      });
  });

  it('should close the new task modal', function() {
    return driver
      .waitForElementByCss(openNewTaskSelector, wd.asserters.isDisplayed, waitTimeout)
      .click()
      .waitForElementByCss(taskTitleSelector, wd.asserters.isDisplayed, waitTimeout)
      .getValue().should.become('')
      .elementByCss('.close-new-task').click()
      .waitForElementByCss('.new-task-modal', wd.asserters.isNotDisplayed, waitTimeout);
  });

  it('should create a new project', function() {
    var project = 'Release';

    return driver
      .elementByCss(toggleProjectsSelector).click()
      .elementByCss(openNewProjectSelector).click()
      .elementByCss(projectTitleSelector).type(project)
      .elementByCss('.create-project').click()
      .elementByCss(activeProjectSelector).text()
      .should.become(project)
      .elementsByCss('.project').then(function(elements) {
        elements.length.should.equal(2);
        elements[1].text().should.become(project);
      });
  });

  it('should select a project', function() {
    return driver
      .elementByCss(toggleProjectsSelector).click()
      .elementsByCss('.project').then(function(elements) {
        elements[0].click();
      })
      .elementByCss(activeProjectSelector).text()
      .should.become(initialProjectTitle)
      .elementsByCss(taskSelector).then(function(elements) {
        elements.length.should.equal(1);
      });
  });

  it('should close the new project modal', function() {
    return driver
      .elementByCss(toggleProjectsSelector).click()
      .waitForElementByCss(openNewProjectSelector, wd.asserters.isDisplayed, waitTimeout)
      .click()
      .waitForElementByCss(projectTitleSelector, wd.asserters.isDisplayed, waitTimeout)
      .getValue().should.become('')
      .elementByCss('.close-new-project').click()
      .waitForElementByCss('.new-project-modal', wd.asserters.isNotDisplayed, waitTimeout)
      .elementByCss(toggleProjectsSelector).click()
  });

  it('should complete a task', function() {
    return driver
      .elementsByCss(taskSelector).then(function(elements) {
        elements[0].click();
      })
      .sleep(waitTimeout)
      .elementsByCss(taskSelector).then(function(elements) {
        elements.length.should.equal(0);
      });
  });
});
