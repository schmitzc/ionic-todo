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
    element(by.css('.ion-compose')).click();

    var task = 'Write tests';
    element(by.model('task.title')).sendKeys(task);
    element(by.buttonText('Create Task')).click();

    var tasks = element.all(by.repeater('task in ctrl.activeProject.tasks'));
    expect(tasks.count()).toEqual(1);
    expect(tasks.get(0).getText()).toEqual(task);
  });

  function takeScreenshot() {
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream("/Users/Cassie/Downloads/screenshot.png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };
});
