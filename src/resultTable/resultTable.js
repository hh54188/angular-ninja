angular.module('app', [])
.controller('TableController', function($scope, $window){
	$scope.data = $window.data;
})