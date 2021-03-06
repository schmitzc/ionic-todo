(function(){angular.module("app",["ionic","app.services","app.projects"])})();(function(){angular.module("app.projects",[])})();(function(){angular.module("app.services",[])})();(function(){angular.module("app.projects").controller("NewProjectController",["$rootScope",function(c){var a=this;a.submitForm=function(){a.submitted=!0};a.submitProject=function(d){d&&(c.$broadcast("newProjectSubmitted",d),d.title="",a.submitted=!1)};a.closeNewProject=function(){c.$broadcast("newProjectClosed",null);a.submitted=!1}}])})();(function(){angular.module("app.projects").controller("NewTaskController",["$rootScope",function(c){var a=this;a.submitForm=function(){a.submitted=!0};a.submitTask=function(d){d&&(c.$broadcast("newTaskSubmitted",d),d.title="",a.submitted=!1)};a.closeNewTask=function(){c.$broadcast("newTaskClosed",null);a.submitted=!1}}])})();(function(){angular.module("app.projects").controller("ProjectController",["$scope","$timeout","$ionicPopup","$ionicModal","$ionicSideMenuDelegate","projectService",function(c,a,d,f,g,e){function h(){d.show({template:'<input class="project-title" type="text" ng-model="data.title">',title:"Enter Your First Project",scope:c,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(a){c.data.title?b.createProject({title:c.data.title}):a.preventDefault()}}]})}var b=this;b.toggleProjects=
function(){g.toggleLeft()};b.selectProject=function(a,c){b.activeProject=a;e.setLastActiveIndex(c);g.toggleLeft(!1)};b.newProject=function(){b.projectModal.show()};b.newTask=function(){b.taskModal.show()};b.createProject=function(a){a=e.newProject(a.title);b.projects.push(a);b.projectModal.hide();e.save(b.projects);b.selectProject(a,b.projects.length-1)};b.closeNewProject=function(){b.projectModal.hide()};b.createTask=function(a){b.activeProject&&a&&(b.activeProject.tasks.push({title:a.title}),b.taskModal.hide(),
e.save(b.projects))};b.closeNewTask=function(){b.taskModal.hide()};b.completeTask=function(a){b.activeProject.tasks.splice(a,1);e.save(b.projects)};(function(){b.projects=e.all();b.activeProject=b.projects[e.getLastActiveIndex()];f.fromTemplateUrl("app/projects/new-project.html",function(a){b.projectModal=a},{focusFirstInput:!0});f.fromTemplateUrl("app/projects/new-task.html",function(a){b.taskModal=a},{focusFirstInput:!0});c.$on("newProjectSubmitted",function(a,c){b.createProject(c)});c.$on("newProjectClosed",
function(a,c){b.closeNewProject()});c.$on("newTaskSubmitted",function(a,c){b.createTask(c)});c.$on("newTaskClosed",function(a,c){b.closeNewTask()});c.data={};a(function(){0===b.projects.length&&h()});c.$on("$destroy",function(){c.projectModal.remove();c.taskModal.remove()})})()}])})();(function(){angular.module("app.services").factory("projectService",["$window",function(c){return{all:function(){var a=c.localStorage.projects;return a?angular.fromJson(a):[]},save:function(a){c.localStorage.projects=angular.toJson(a)},newProject:function(a){return{title:a,tasks:[]}},getLastActiveIndex:function(){return parseInt(c.localStorage.lastActiveProject)||0},setLastActiveIndex:function(a){c.localStorage.lastActiveProject=a}}}])})();
