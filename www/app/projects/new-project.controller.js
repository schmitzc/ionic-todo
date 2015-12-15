(function() {
  angular.module('app.projects')
  .controller('NewProjectController', ['$rootScope', NewProjectController]);

  function NewProjectController($rootScope) {
    var ctrl = this;

    ctrl.project = { title: "" };

    ctrl.submitForm = submitForm;
    ctrl.submitProject = submitProject;
    ctrl.closeNewProject = closeNewProject;

    function submitForm() {
      ctrl.submitted = true;
    };

    function submitProject(project) {
      if (!project) {
        return;
      }

      $rootScope.$broadcast('newProjectSubmitted', project);

      resetForm();
    };

    function closeNewProject() {
      $rootScope.$broadcast('newProjectClosed', null);

      resetForm();
    }

    function resetForm() {
      ctrl.project = { title: "" };
      ctrl.submitted = false;
    }
  };
})();
