'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: './app/views/home.html'
	}).state('login', {
		url: '/login',
		templateUrl: './app/views/login.html',
		controller: 'loginCtrl'
	});
});
'use strict';

angular.module('app').controller('loginCtrl', function ($scope) {

	$scope.login = function (newUser) {
		console.log(newUser);
	};
});