/// <reference path="bower_components/jquery/jquery.min.js" />
/// <reference path="bower_components/angular/angular.min.js" />
/// <reference path="bower_components/bootstrap/dist/js/bootstrap.min.js" />
/// <reference path="bower_components/json2/json2.js" />

'use strict';

require.config({
	paths: {
		jquery: "bower_components/jquery/jquery.min",
		angular: "bower_components/angular/angular.min",
		bootstrap: "bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		angular: { exports: 'angular' },
		bootstrap: { deps: ['jquery'] }
	},
	priority: [
	'angular'
	],
	urlArgs: "bust=" + (new Date()).getTime()
});

if (!window.JSON) {
	require(['bower_components/json2/json2']);
}

require(['angular', 'mainApp', 'jquery', 'assemblyInfo', 'mainController', 'bootstrap'], function (angular, mainApp, $, assemblyInfo) {
	$(document).ready(function () {
		console.log("version: " + assemblyInfo.version + " by " + assemblyInfo.writer);
		angular.bootstrap(document, ['mainModule']);
		console.log("mainModule bootstrapped");
		});
});