(function() {
  'use strict';

  angular
    .module('app.projects')
    .controller('NewProjectController', ['$rootScope', NewProjectController]);

  function NewProjectController($rootScope) {
    var ctrl = this;

    ctrl.project = resetProject();

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

      resetForm();
    }

    function closeNewProject() {
      $rootScope.$broadcast('newProjectClosed', null);

      resetForm();
    }

    function resetForm() {
      ctrl.project = resetProject();
      ctrl.submitted = false;
    }

    function resetProject() {
      return { title: '' };
    }
  }
})();
