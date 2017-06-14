angular.module('app').controller('authCtrl', ($scope, authService) => {

	$scope.login = (newUser) => {
		console.log("login", newUser)
	}

	$scope.register = (user) => {
		authService.registerUser(user).then(res => {
			console.log('Controller Promise', res)
		})
	}
})