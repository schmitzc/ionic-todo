(function() {
  'use strict';

  angular.module('app.projects')
    .controller('NewTaskController', ['$rootScope', NewTaskController]);

  function NewTaskController($rootScope) {
    var ctrl = this;

    ctrl.submitForm = submitForm;
    ctrl.submitTask = submitTask;
    ctrl.closeNewTask = closeNewTask;

    function submitForm() {
      ctrl.submitted = true;
    }

    function submitTask(task) {
      if (!task) {
        return;
      }

      $rootScope.$broadcast('newTaskSubmitted', task);

      task.title = '';
      resetForm();
    }

    function resetForm() {
      ctrl.submitted = false;
    }

    function closeNewTask() {
      $rootScope.$broadcast('newTaskClosed', null);

      resetForm();
    }
  }
})();
