describe('Projects', function() {
  var fs = require('fs');
  var initialProjectTitle = 'Tests';

  beforeAll(function() {
    browser.get('/');

    element(by.model('data.title')).sendKeys(initialProjectTitle);
    element(by.buttonText('Create Project')).click();
  });

  it('should select the initial project', function() {
    expect(getActiveProjectTitle()).toEqual(initialProjectTitle);
  });

  it('should create a task', function() {
    openNewTaskModal();

    var task = 'Write tests';
    element(by.model('task.title')).sendKeys(task);
    element(by.buttonText('Create Task')).click();

    var tasks = getTasks();
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

  it('should create a new project', function() {
    toggleProjectsMenu();

    openNewProjectButton = getOpenNewProjectButton();
    openNewProjectButton.isDisplayed().then(function() {
      openNewProjectButton.click();

      var project = 'Release';
      element(by.model('project.title')).sendKeys(project);
      element(by.buttonText('Create Project')).click();

      var projects = getProjects();
      expect(projects.count()).toEqual(2);
      expect(projects.get(1).getText()).toEqual(project);

      expect(getActiveProjectTitle()).toEqual(project);

      expect(getTasks().count()).toEqual(0);
    });
  });

  it('should select a project', function() {
    toggleProjectsMenu();

    openNewProjectButton = getOpenNewProjectButton();
    openNewProjectButton.isDisplayed().then(function() {
      getProjects().get(0).click();
      expect(getActiveProjectTitle()).toEqual(initialProjectTitle);
      expect(getTasks().count()).toEqual(1);
    });
  });

  function getActiveProjectTitle() {
    return element(by.css('.active-project-title')).getText()
  }

  function getTasks() {
    return element.all(by.repeater('task in ctrl.activeProject.tasks'));
  }

  function getProjects() {
    return element.all(by.repeater('project in ctrl.projects'));
  }

  function getOpenNewProjectButton() {
    return element(by.css('.open-new-project'));
  }

  function openNewTaskModal() {
    element(by.css('.open-new-task')).click();
  }

  function toggleProjectsMenu() {
    element(by.css('.toggle-projects-menu')).click();
  }

  function takeScreenshot() {
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream("/Users/Cassie/Downloads/screenshot.png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }
});
