'use strict'

define(['angular', 'assemblyInfo', 'Controllers/mainController', 'Directives/AssemblyInfoDirective'],
	function (angular, assemblyInfo, mainController, assemblyInfoDirective) {
		return angular.module('mainModule', [])
			.controller('mainController', mainController)
			.directive('assemblyInfo', ['data.assemblyInfo', assemblyInfoDirective])
			.value('data.assemblyInfo', assemblyInfo)
		;
	}
);