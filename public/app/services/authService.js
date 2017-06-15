angular.module('app').service('authService', function($http){

	this.registerUser = (user) => {
		return $http({
			url: '/api/create-user',
			method: 'POST',
			data: user
		})
	}

	this.loginUser = (user) => {
		return $http({
			url: '/api/login-user',
			method: 'POST',
			data: user
		})
	}

})