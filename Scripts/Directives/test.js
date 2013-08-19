'use strict'

//.directive('assemblyInfo', test(assemblyInfo))

define(function () {

	var _assemblyInfo;

	function assemblyInfoDirective() {
		return {
			restrict: 'CA',
			templateUrl: 'partials/AssemblyInfo.html',
			replace: true,
			controller: function ($scope) {
				$scope.AssemblyInfo = _assemblyInfo;
			}
		};
	};

	 return function con(assemblyInfo) {
	 	_assemblyInfo = assemblyInfo;
	 	console.log("version " + _assemblyInfo.version + " by "+ assemblyInfo.writer);
		return assemblyInfoDirective;
	 };
});



