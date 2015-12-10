(function() {
  angular.module('app')
  .controller('ProjectController', ProjectController);

  function ProjectController($scope, $ionicModal, $ionicSideMenuDelegate, projectService) {
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
    };

    function submitForm() {
      ctrl.submitted = true;
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
  };
})();
