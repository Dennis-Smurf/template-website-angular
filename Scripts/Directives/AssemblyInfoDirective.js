'use strict'

define( function () {
	return function assemblyInfoDirective(assemblyInfo) {
		console.log("version " + assemblyInfo.version + " by " + assemblyInfo.writer);
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



