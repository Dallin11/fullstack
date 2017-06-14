angular.module('app').controller('authCtrl', ($scope) => {
	console.log($scope);

	$scope.login = (newUser) => {
		console.log("login", newUser)
	}

	$scope.register = (user) => {
		console.log("register", user)
	}
})