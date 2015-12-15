(function() {
  angular
    .module('app.services')
    .factory('projectService', ['$window', projectService]);

  function projectService($window) {
    return {
      all: function() {
        var projectsString = $window.localStorage['projects'];

        if (projectsString) {
          return angular.fromJson(projectsString);
        }

        return [];
      },

      save: function(projects) {
        $window.localStorage['projects'] = angular.toJson(projects);
      },

      newProject: function(projectTitle) {
        return {
          title: projectTitle,
          tasks: []
        };
      },

      getLastActiveIndex: function() {
        return parseInt($window.localStorage['lastActiveProject']) || 0;
      },

      setLastActiveIndex: function(index) {
        $window.localStorage['lastActiveProject'] = index;
      }
    };
  }
})();
