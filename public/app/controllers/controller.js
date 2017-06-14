angular.module('app').controller('loginCtrl', ($scope) => {

	$scope.login = (newUser) => {
		console.log(newUser)
	}
})