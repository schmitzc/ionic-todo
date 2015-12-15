(function() {
  angular.module('app')
  .controller('ProjectController', [
    '$scope',
    '$timeout',
    '$ionicPopup',
    '$ionicModal',
    '$ionicSideMenuDelegate',
    'projectService',
    ProjectController
  ]);

  function ProjectController(
    $scope,
    $timeout,
    $ionicPopup,
    $ionicModal,
    $ionicSideMenuDelegate,
    projectService) {

    var ctrl = this;

    ctrl.task = { title: "" };

    ctrl.toggleProjects = toggleProjects;
    ctrl.selectProject = selectProject;
    ctrl.newProject = newProject;
    ctrl.newTask = newTask;
    ctrl.createProject = createProject;
    ctrl.closeNewProject = closeNewProject;
    ctrl.createTask = createTask;
    ctrl.closeNewTask = closeNewTask;

    activate();

    function activate() {
      ctrl.projects = projectService.all();

      ctrl.activeProject = ctrl.projects[projectService.getLastActiveIndex()];

      $ionicModal.fromTemplateUrl('app/projects/new-project.html', function(modal) {
        ctrl.projectModal = modal;
      }, {
        focusFirstInput: true
      });

      $ionicModal.fromTemplateUrl('app/projects/new-task.html', function(modal) {
        ctrl.taskModal = modal;
      }, {
        focusFirstInput: true
      });

      $scope.$on('newProjectSubmitted', function(event, project) {
        ctrl.createProject(project);
      });

      $scope.$on('newProjectClosed', function(event, arg) {
        ctrl.closeNewProject();
      });

      $scope.$on('newTaskSubmitted', function(event, task) {
        ctrl.createTask(task);
      });

      $scope.$on('newTaskClosed', function(event, arg) {
        ctrl.closeNewTask();
      });

      $scope.data = {};

      $timeout(function() {
        if (ctrl.projects.length == 0) {
          initialCreateProjectPopup();
        }
      });

      $scope.$on('$destroy', function() {
        $scope.projectModal.remove();
        $scope.taskModal.remove();
      });
    };

    function toggleProjects() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    function selectProject(project, index) {
      ctrl.activeProject = project;
      projectService.setLastActiveIndex(index);
      $ionicSideMenuDelegate.toggleLeft(false);
    };

    function newProject() {
      ctrl.projectModal.show();
    };

    function newTask() {
      ctrl.taskModal.show();
    };

    function createProject(project) {
      var newProject = projectService.newProject(project.title);

      ctrl.projects.push(newProject);

      ctrl.projectModal.hide();

      projectService.save(ctrl.projects);

      ctrl.selectProject(newProject, ctrl.projects.length - 1);
    };

    function closeNewProject() {
      ctrl.projectModal.hide();
    };

    function createTask(task) {
      if (!ctrl.activeProject || !task) {
        return;
      }

      ctrl.activeProject.tasks.push({
        title: task.title
      });

      ctrl.taskModal.hide();

      projectService.save(ctrl.projects);
    };

    function closeNewTask() {
      ctrl.taskModal.hide();
    };

    function initialCreateProjectPopup() {
      $ionicPopup.show({
        template: '<input class="project-title" type="text" ng-model="data.title">',
        title: 'Enter Your First Project',
        scope: $scope,
        buttons: [
          {
            text: '<b>Create Project</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.title) {
                e.preventDefault();
              } else {
                ctrl.createProject({ title: $scope.data.title });
                return;
              }
            }
          }
        ]
      });
    };
  };
})();
