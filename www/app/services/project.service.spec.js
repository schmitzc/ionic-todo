'use strict';

describe('project service', function() {
  var projectService;

  var projects = [
    {
      title: 'Tests',
      tasks: []
    },
    {
      title: 'Moar Tests',
      tasks: []
    }
  ];

  beforeEach(module('app.services'));

  beforeEach(module(function($provide) {
    $provide.value('$window', window);
  }));

  beforeEach(inject(function(_projectService_, $window) {
    projectService = _projectService_;
  }));

  afterEach(function() {
    window.localStorage.clear();
  });

  describe('all projects', function() {
    it('should return the projects as JSON', function() {
      window.localStorage['projects'] = angular.toJson(projects);

      expect(projectService.all()).toEqual(projects);
    });

    it('should return an empty array if no projects', function() {
      expect(projectService.all()).toEqual([]);
    });
  });

  it('should save the projects', function() {
    projectService.save(projects);

    expect(window.localStorage['projects']).toEqual(angular.toJson(projects));
  });

  it('should return a new project', function() {
    var projectTitle = 'Tests';

    var newProject = projectService.newProject(projectTitle);

    expect(newProject).toEqual({ title: projectTitle, tasks: [] });
  });

  describe('get last active project index', function() {
    it('should return the last active project index', function() {
      window.localStorage['lastActiveProject'] = '123';

      expect(projectService.getLastActiveIndex()).toEqual(123);
    });

    it('should return 0 if there is no last active project index set', function() {
      expect(projectService.getLastActiveIndex()).toEqual(0);
    });
  });

  it('should set the last active project index', function() {
    projectService.setLastActiveIndex(123);

    expect(window.localStorage['lastActiveProject']).toEqual('123');
  });
});
