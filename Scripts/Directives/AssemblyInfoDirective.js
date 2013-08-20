'use strict'

define( function () {
	return function (assemblyInfo) {
		console.log("version " + assemblyInfo.version + " by " + assemblyInfo.writer);
		return {
			restrict: 'CA',
			template: '<div class="label label-default pull-right">version {{AssemblyInfo.version}} by {{AssemblyInfo.writer}}</div>',
			replace: true,
			controller: function ($scope) {
				$scope.AssemblyInfo = assemblyInfo;
			}
		};
	};
});



