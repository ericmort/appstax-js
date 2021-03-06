/*global angular, appstax */
/*jshint unused:false */
'use strict';

// initialize appstax
appstax.init("N0FyemRZZ0M4TmJnQQ==");

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', []);

todomvc.filter('todoFilter', function ($location) {
	return function (input) {
		var filtered = {};
		angular.forEach(input, function (todo, id) {
			var path = $location.path();
			if (path === '/active') {
				if (!todo.completed) {
					filtered[id] = todo;
				}
			} else if (path === '/completed') {
				if (todo.completed) {
					filtered[id] = todo;
				}
			} else {
				filtered[id] = todo;
			}
		});
		return filtered;
	};
});
