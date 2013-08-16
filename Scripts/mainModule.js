﻿'use strict'

define(['angular', 'Controllers/mainController', 'Directives/AssemblyInfoDirective'], function (angular, mainController, assemblyInfoDirective) {
	return angular.module('mainModule', []).
	/*	 config(['$routeProvider', function ($routeProvider) {
		 	$routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
		 	$routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
		 	$routeProvider.otherwise({ redirectTo: '/view1' });
		 }]).
		 //This could be placed in separated file
		 */
		controller('mainController', mainController).
		directive('assemblyInfo', assemblyInfoDirective)
	;
});