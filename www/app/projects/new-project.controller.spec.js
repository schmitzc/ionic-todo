describe('new project controller', function() {
  var controller,
    rootScopeMock;

  var projectData = { title: 'Tests' };

  beforeEach(module('app.projects'));

  beforeEach(inject(function($controller) {
    rootScopeMock = jasmine.createSpyObj('$rootScope spy', ['$broadcast']);

    controller = $controller('NewProjectController', {
      '$rootScope': rootScopeMock
    });
  }));

  describe('activate controller', function() {
    it('should set project title to empty string', function() {
      expect(controller.project).toEqual({ title: "" });
    });
  });

  it('should submit the form', function() {
    controller.submitForm();
    expect(controller.submitted).toBeTruthy();
  });

  describe('submit project', function() {
    describe('with project data', function() {
      beforeEach(function() {
        controller.project = projectData;
        controller.submitted = true;

        controller.submitProject(controller.project);
      });

      it('should broadcast a new project submitted event', function() {
        expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('newProjectSubmitted', projectData);
      });

      it('should reset the form', function() {
        expect(controller.project).toEqual({ title: "" });
        expect(controller.submitted).toBeFalsy();
      });
    });

    it('should not submit the project if the project data is empty', function() {
      controller.submitProject(null);
      expect(rootScopeMock.$broadcast).not.toHaveBeenCalled();
    });
  });

  describe('close the new project modal', function() {
    beforeEach(function() {
      controller.project = projectData;
      controller.submitted = true;
      controller.closeNewProject();
    });

    it('should reset the project form', function() {
      expect(controller.project).toEqual({ title: "" });
      expect(controller.submitted).toBeFalsy();
    });

    it('should broadcast a new project closed event', function() {
      expect(rootScopeMock.$broadcast).toHaveBeenCalledWith('newProjectClosed', null);
    });
  });
});
