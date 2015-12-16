(function() {
  'use strict';

  angular.module('app.projects')
    .controller('NewTaskController', ['$rootScope', NewTaskController]);

  function NewTaskController($rootScope) {
    var ctrl = this;

    ctrl.task = resetTask();

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

      resetForm();
    }

    function resetForm() {
      ctrl.task = resetTask();
      ctrl.submitted = false;
    }

    function resetTask() {
      return {title: ''};
    }

    function closeNewTask() {
      $rootScope.$broadcast('newTaskClosed', null);

      resetForm();
    }
  }
})();
