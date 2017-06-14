angular.module('app', ['ui.router'])
	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './app/views/home.html',
			})
			.state('login', {
				url: '/login',
				templateUrl: './app/views/login.html',
				controller: 'loginCtrl'
			})


	})