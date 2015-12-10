describe('Projects', function() {
  var fs = require('fs');
  var driver;

  beforeAll(function() {
    driver = browser.driver;

    browser.get('/');

    element(by.model('data.title')).sendKeys('Tests');
    element(by.buttonText('Create Project')).click();
  });

  it('should select the initial project', function() {
    expect(element(by.css('.active-project-title')).getText()).toEqual('Tests');
  });

  it('should create a task', function() {
    openNewTaskModal();

    var task = 'Write tests';
    element(by.model('task.title')).sendKeys(task);
    element(by.buttonText('Create Task')).click();

    var tasks = element.all(by.repeater('task in ctrl.activeProject.tasks'));
    expect(tasks.count()).toEqual(1);
    expect(tasks.get(0).getText()).toEqual(task);
  });

  it('should close the new task modal', function() {
    openNewTaskModal();

    var modalEl = element(by.css('.new-task-modal'));
    expect(modalEl.isDisplayed()).toBeTruthy();

    element(by.css('.close-new-task')).click();
    expect(modalEl.isDisplayed()).toBeFalsy();
  });

  function openNewTaskModal() {
    element(by.css('.open-new-task')).click();
  }

  function takeScreenshot() {
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream("/Users/Cassie/Downloads/screenshot.png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };
});
