'use strict';

describe('new task controller', function() {
  var controller,
    rootScopeMock;

  var taskData = { title: 'Write tests' };

  beforeEach(module('app.projects'));

  beforeEach(inject(function($controller) {
    rootScopeMock = jasmine.createSpyObj('$rootScope spy', ['$broadcast']);

    controller = $controller('NewTaskController', {
      '$rootScope': rootScopeMock
    });
  }));

  it('should submit the form', function() {
    controller.submitForm();
    expect(controller.submitted).toBeTruthy();
  });

  describe('submit task', function() {
    describe('with task data', function() {
      beforeEach(function() {
        controller.submitted = true;

        controller.submitTask(taskData);
      });

      it('should broadcast a new task submitted event', function() {
        expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('newTaskSubmitted', taskData);
      });

      it('should reset the form', function() {
        expect(taskData).toEqual({ title: '' });
        expect(controller.submitted).toBeFalsy();
      });
    });

    it('should not submit the task if the task data is empty', function() {
      controller.submitTask(null);
      expect(rootScopeMock.$broadcast).not.toHaveBeenCalled();
    });
  });

  describe('close the new task modal', function() {
    beforeEach(function() {
      controller.submitted = true;
      controller.closeNewTask();
    });

    it('should reset the task form', function() {
      expect(controller.submitted).toBeFalsy();
    });

    it('should broadcast a new task closed event', function() {
      expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('newTaskClosed', null);
    });
  });
});
