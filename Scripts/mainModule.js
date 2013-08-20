'use strict'

define([
		 'angular'
		,'Controllers/mainController'
		,'Directives/AssemblyInfoDirective'
		,'Services/localStorageService'
		,'Services/utility'
		,'assemblyInfo'
		], function (
			 angular
			,mainController
			,assemblyInfoDirective
			,localStorageProvider
			,utilityService
			,assemblyInfo
			) {
				return angular.module('mainModule', [])
					.controller('mainController', ['$scope', 'service.localStorage', 'service.utilities', mainController])
					.directive('assemblyInfo', ['values.assemblyInfo', assemblyInfoDirective])
					.service('service.localStorage', localStorageProvider)
					.service('service.utilities', utilityService)
					.value('values.assemblyInfo', assemblyInfo)
				;
			}
);