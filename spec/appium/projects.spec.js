'use strict';

var path = require('path');
var wd = require('wd');

require(path.resolve('spec/appium/setup.js'))(function(driver) {
  var initialProjectTitle = 'Tests';
  var activeProjectSelector = '.active-project-title';
  var openNewTaskSelector = '.open-new-task';
  var toggleProjectsSelector = '.toggle-projects-menu';

  it('should create the initial project', function () {
    return driver
      .elementByCss('.project-title').type(initialProjectTitle)
      .elementByCss('.button-positive').click()
      .elementByCss(activeProjectSelector).text()
      .should.become(initialProjectTitle);
  });

  it('should create a task', function() {
    var task = 'Write tests';

    return driver
      .waitForElementByCss(openNewTaskSelector, wd.asserters.isDisplayed, 2000, function(err, el) {
        el.click();
      })
      .waitForElementByCss('.task-title', wd.asserters.isDisplayed, 2000, function(err, el) {
        el.type(task);
      })
      .elementByCss('.create-task').click()
      .elementsByCss('.task').then(function(elements) {
        elements.length.should.equal(1);
        elements[0].text().should.become(task);
      });
  });

  it('should close the new task modal', function() {
    return driver
      .waitForElementByCss(openNewTaskSelector, wd.asserters.isDisplayed, 2000, function(err, el) {
        el.click();
      })
      .waitForElementByCss('.close-new-task', wd.asserters.isDisplayed, 2000, function(err, el) {
        el.click();
      })
      .waitForElementByCss(activeProjectSelector, wd.asserters.isDisplayed, 2000);
  });

  it('should create a new project', function() {
    var project = 'Release';

    return driver
      .elementByCss(toggleProjectsSelector).click()
      .elementByCss('.open-new-project').click()
      .elementByCss('.project-title').type(project)
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
      .elementsByCss('.task').then(function(elements) {
        elements.length.should.equal(1);
      });
  });
});
