angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo",["ionic","todo.controllers","todo.services"]),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["t","e","o","r","c","n",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show()},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}}),angular.module("todo.controllers",[]).controller("TodoCtrl",["$scope","$timeout","$ionicModal","$ionicSideMenuDelegate","$ionicPopup","Projects",function(t,e,o,r,c,n){t.submitted=!1,t.project={title:""},t.task={title:""},t.projects=n.all(),t.activeProject=t.projects[n.getLastActiveIndex()],o.fromTemplateUrl("templates/new-project.html",function(e){t.projectModal=e},{scope:t,focusFirstInput:!0}),t.createProject=function(e){if(e){var o=n.newProject(e.title);t.projects.push(o),t.projectModal.hide(),n.save(t.projects),t.selectProject(o,t.projects.length-1),t.resetProjectForm()}},t.newProject=function(){t.projectModal.show()},t.closeNewProject=function(){t.projectModal.hide(),t.resetProjectForm()},t.resetProjectForm=function(){t.project={title:""},t.resetForm()},t.submitForm=function(){t.submitted=!0},t.resetForm=function(){t.submitted=!1},t.selectProject=function(e,o){t.activeProject=e,n.setLastActiveIndex(o),r.toggleLeft(!1)},o.fromTemplateUrl("templates/new-task.html",function(e){t.taskModal=e},{scope:t,focusFirstInput:!0}),t.createTask=function(e){t.activeProject&&e&&(t.activeProject.tasks.push({title:e.title}),t.taskModal.hide(),n.save(t.projects),t.resetTaskForm())},t.newTask=function(){t.taskModal.show();
},t.closeNewTask=function(){t.taskModal.hide(),t.resetTaskForm()},t.resetTaskForm=function(){t.task={title:""},t.resetForm()},t.toggleProjects=function(){r.toggleLeft()},t.data={},e(function(){0==t.projects.length&&c.show({template:'<input type="text" ng-model="data.title">',title:"Enter Your First Project",scope:t,buttons:[{text:"<b>Create Project</b>",type:"button-positive",onTap:function(e){return t.data.title?void t.createProject({title:t.data.title}):void e.preventDefault()}}]})})}]),angular.module("todo.services",[]).factory("Projects",function(){return{all:function(){var t=window.localStorage.projects;return t?angular.fromJson(t):[]},save:function(t){window.localStorage.projects=angular.toJson(t)},newProject:function(t){return{title:t,tasks:[]}},getLastActiveIndex:function(){return parseInt(window.localStorage.lastActiveProject)||0},setLastActiveIndex:function(t){window.localStorage.lastActiveProject=t}}});