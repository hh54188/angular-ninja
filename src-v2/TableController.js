angular.module('app')
.controller('TableController',
	['$scope', 'DataModel',
	function($scope, DataModel){

		$scope.data = DataModel.getData();
		// $scope.goPage = function (num) {
		// 	console.log("Pager Directive Action");
		// }
}]);