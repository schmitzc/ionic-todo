describe('project controller', function() {
  var controller,
    projectServiceMock,
    ionicPopupMock,
    ionicModalMock,
    ionicSideMenuDelegateMock,
    timeoutMock;

  var project = {
    title: 'Tests',
    tasks: []
  };

  var projects = [
    {
      title: 'Existing',
      tasks: []
    }
  ];

  var projectData = { title: 'Tests' };
  var taskData = { title: 'Write test' };

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope, $timeout) {
    scope = $rootScope.$new();

    projectServiceMock = {
      all: jasmine.createSpy('all projects spy')
        .and.returnValue(projects),

      getLastActiveIndex: jasmine.createSpy('get last active project index spy')
        .and.returnValue(0),

      setLastActiveIndex: jasmine.createSpy('set last active project index spy'),

      newProject: jasmine.createSpy('new project spy')
        .and.returnValue(project),

      save: jasmine.createSpy('save spy'),
    };

    timeoutMock = $timeout;

    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['show']);

    ionicModalMock = jasmine.createSpyObj('$ionicModal spy', ['fromTemplateUrl']);

    ionicSideMenuDelegateMock = jasmine.createSpyObj(
      '$ionicSideMenuDelegate spy',
      ['toggleLeft']
    );

    controller = $controller('ProjectController', {
      'projectService': projectServiceMock,
      '$ionicPopup': ionicPopupMock,
      '$ionicModal': ionicModalMock,
      '$ionicSideMenuDelegate': ionicSideMenuDelegateMock,
      '$scope': scope,
      '$timeout': timeoutMock
    });

    controller.projectModal = jasmine.createSpyObj(
      'project modal spy',
      ['show', 'hide']
    );

    controller.taskModal = jasmine.createSpyObj(
      'task modal spy',
      ['show', 'hide']
    );
  }));

  afterEach(function() {
    projects = [
      {
        title: 'Existing',
        tasks: []
      }
    ];
  });

  describe('activate controller', function() {
    it('should initialize the projects list', function() {
      expect(controller.projects).toEqual(projects);
    });

    it('should set the active project', function() {
      expect(controller.activeProject).toEqual(projects[0]);
    });

    it('should show a popup for initial project creation', function() {
      controller.projects = [];

      timeoutMock.flush();

      expect(ionicPopupMock.show).toHaveBeenCalled();
    });
  });

  describe('create project', function() {
    describe('with project data', function() {
      beforeEach(function() {
        controller.selectProject = jasmine.createSpy('select project spy');

        controller.createProject(projectData);
      });

      it('should create a new project with the project data', function() {
        expect(projectServiceMock.newProject).toHaveBeenCalledWith(projectData.title);
      });

      it('should add the new project to the projects list', function() {
        expect(controller.projects.length).toEqual(2);
        expect(controller.projects[1]).toEqual(project);
      });

      it('should save the project', function() {
        expect(projectServiceMock.save).toHaveBeenCalledWith(projects);
      });

      it('should select the new project', function() {
        expect(controller.selectProject).toHaveBeenCalledWith(project, 1);
      });

      it('should close the project modal', function() {
        expect(controller.projectModal.hide).toHaveBeenCalled();
      });
    });
  });

  it('should open the new project modal', function() {
    controller.newProject();
    expect(controller.projectModal.show).toHaveBeenCalled();
  });

  it('should close the new project modal', function() {
    controller.closeNewProject();
    expect(controller.projectModal.hide).toHaveBeenCalled();
  });

  describe('create new task', function() {
    describe('with task data', function() {
      beforeEach(function() {
        controller.task = taskData;
        controller.submitted = true;
        controller.createTask(taskData);
      });

      it('should add the task to the active project task list', function() {
        expect(controller.activeProject.tasks.length).toEqual(1);
        expect(controller.activeProject.tasks[0]).toEqual(taskData);
      });

      it('should close the new task modal', function() {
        expect(controller.taskModal.hide).toHaveBeenCalled();
      });

      it('should save the task', function() {
        expect(projectServiceMock.save).toHaveBeenCalledWith(projects);
      });
    });

    it('should not create the task if there is no active project', function() {
      controller.activeProject = null;
      controller.createTask(taskData);
      expect(controller.projects[0].tasks.length).toEqual(0);
    });

    it('should not create the task if the task data is empty', function() {
      controller.createTask(null);
      expect(controller.projects[0].tasks.length).toEqual(0);
    });
  });

  it('should open the new task modal', function() {
    controller.newTask();
    expect(controller.taskModal.show).toHaveBeenCalled();
  });

  it('should close the new task modal', function() {
    controller.closeNewTask();
    expect(controller.taskModal.hide).toHaveBeenCalled();
  });

  describe('select project', function() {
    var index = 1;

    beforeEach(function() {
      controller.selectProject(project, index);
    });

    it('should set the active project', function() {
      expect(controller.activeProject).toEqual(project);
    });

    it('should set the last active project index', function() {
      expect(projectServiceMock.setLastActiveIndex).toHaveBeenCalledWith(index);
    });

    it('should close the projects menu', function() {
      expect(ionicSideMenuDelegateMock.toggleLeft).toHaveBeenCalledWith(false);
    });
  });

  it('should toggle projects menu', function() {
    controller.toggleProjects();
    expect(ionicSideMenuDelegateMock.toggleLeft).toHaveBeenCalled();
  });
});
