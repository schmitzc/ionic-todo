(function() {
  'use strict';

  angular
    .module('app.projects')
    .controller('NewProjectController', ['$rootScope', NewProjectController]);

  function NewProjectController($rootScope) {
    var ctrl = this;

    ctrl.submitForm = submitForm;
    ctrl.submitProject = submitProject;
    ctrl.closeNewProject = closeNewProject;

    function submitForm() {
      ctrl.submitted = true;
    }

    function submitProject(project) {
      if (!project) {
        return;
      }

      $rootScope.$broadcast('newProjectSubmitted', project);

      project.title = '';
      resetForm();
    }

    function closeNewProject() {
      $rootScope.$broadcast('newProjectClosed', null);

      resetForm();
    }

    function resetForm() {
      ctrl.submitted = false;
    }
  }
})();
