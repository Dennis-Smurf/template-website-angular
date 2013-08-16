'use strict'

define(['AssemblyInfo'], function (assemblyInfo) {
	console.log('version '+assemblyInfo.version+" by "+assemblyInfo.writer);
	return function assemblyInfoDirective() {
		return {
			restrict: 'CA',
			templateUrl: 'partials/AssemblyInfo.html',
			replace: true,
			controller: function ($scope) {
				$scope.AssemblyInfo = assemblyInfo;
			}
		};
	};
});



