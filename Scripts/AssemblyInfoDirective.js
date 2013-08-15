'use strict'
define(['mainApp', 'AssemblyInfo'], function (mainApp, assemblyInfo) {
	return mainApp.
		directive('assemblyInfo', function () {
			return {
				restrict: 'C,A',
				templateUrl: 'partials/AssemblyInfo.html',
				replace:true,
				controller: function ($scope) {
					$scope.AssemblyInfo = assemblyInfo;
				}
			};

		})
});

