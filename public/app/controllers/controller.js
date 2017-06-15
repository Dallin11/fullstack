angular.module('app').controller('authCtrl', ($scope, authService, $state) => {

	$scope.login = (user) => {
		authService.loginUser(user).then(res => {
			if(res.data.length > 0) {
				$state.go('home')
			} else {
				alert('Too Bad')
			}
		})
	}

	$scope.register = (user) => {
		authService.registerUser(user).then(res => {
			console.log('Controller Promise', res)
		})
	}

})