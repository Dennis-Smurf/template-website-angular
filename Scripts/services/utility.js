define(function () {
	return function () {
		console.log('from http://www.codeproject.com/Articles/637430/Angular-js-example-application');
		return {
			getRandomInt: function (min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		};
	}
});