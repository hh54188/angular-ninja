angular.module('app')
.filter('TableDataFilter', ['$rootScope', function ($rootScope) {
	return function (inputData) {
		$rootScope.$on('filterChanged', function (eventName, value) {
			console.log("TableController:event===>", eventName, value);
		});
		return inputData;
	}
}]);