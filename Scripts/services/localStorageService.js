define(function(){
	return function () {
		console.log('from http://www.codeproject.com/Articles/637430/Angular-js-example-application');
		return {

			isSupported: function () {
				try {
					return 'localStorage' in window && window['localStorage'] !== null;
				} catch (e) {
					return false;
				}
			},

			save: function (key, value) {
				localStorage[key] = JSON.stringify(value);
			},

			fetch: function (key) {
				return JSON.parse(localStorage[key]);
			},

			clear: function (key) {
				localStorage.removeItem(key);
			},

		};
	}
	
});