'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: './app/views/home.html'
	}).state('login', {
		url: '/login',
		templateUrl: './app/views/login.html'
	});
});
'use strict';

angular.module('app').controller('controller', function ($scope) {});