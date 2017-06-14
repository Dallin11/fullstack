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

angular.module('app').controller('authCtrl', function ($scope, authService) {

	$scope.login = function (newUser) {
		console.log("login", newUser);
	};

	$scope.register = function (user) {
		authService.registerUser(user).then(function (res) {
			console.log('Controller Promise', res);
		});
	};
});
'use strict';

angular.module('app').service('authService', function ($http) {

	this.registerUser = function (user) {
		return $http({
			url: '/api/create-user',
			method: 'POST',
			data: user
		});
	};
});