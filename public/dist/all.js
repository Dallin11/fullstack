'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: './app/views/home.html'
	}).state('login', {
		url: '/login',
		templateUrl: './app/views/login.html',
		controller: 'authCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: './app/views/register.html',
		controller: 'authCtrl'
	});
});
'use strict';

angular.module('app').controller('authCtrl', function ($scope) {
	console.log($scope);

	$scope.login = function (newUser) {
		console.log("login", newUser);
	};

	$scope.register = function (user) {
		console.log("register", user);
	};
});