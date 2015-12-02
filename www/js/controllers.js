angular.module('todo.controllers', [])

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {

  $scope.projects = Projects.all();

  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  $ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
    $scope.projectModal = modal;
  }, {
    scope: $scope
  });

  $scope.createProject = function(project) {
    if (!project) {
      return;
    }

    var newProject = Projects.newProject(project.title);
    $scope.projects.push(newProject);

    $scope.projectModal.hide();

    Projects.save($scope.projects);

    $scope.selectProject(newProject, $scope.projects.length-1);
  };

  $scope.newProject = function() {
    $scope.projectModal.show();
  };

  $scope.closeNewProject = function() {
    $scope.projectModal.hide();
  };

  $scope.selectProject = function(project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  $ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope
  });

  $scope.createTask = function(task) {
    if (!$scope.activeProject || !task) {
      return;
    }

    $scope.activeProject.tasks.push({
      title: task.title
    });

    $scope.taskModal.hide();

    Projects.save($scope.projects);

    task.title = "";
  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $timeout(function() {
    if ($scope.projects.length == 0) {
      $scope.newProject();
    }
  });
});
