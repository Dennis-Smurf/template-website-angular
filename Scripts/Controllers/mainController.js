'use strict';

define(function () {
	return function ($scope, storage, utilities) {

		var key = "temp";

		console.log("controller started");

		$scope.welcomeMessage = "Hello";
		if (storage.isSupported()) {
			var randomInt = utilities.getRandomInt(0,100);
			storage.save(key, randomInt);
			var test = storage.fetch(key);
			console.log(test);
		}

	};
});	
