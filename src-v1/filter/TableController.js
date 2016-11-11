angular.module('app')
.controller('TableController', 
	['$scope', '$rootScope', 'DataStorageService', 'GlobalConfigService',
	function($scope, $rootScope, DataStorageService, GlobalConfigService){
		
		$scope.data = DataStorageService.getAllData();
		$scope.tableConfig = GlobalConfigService.getTableConfig();

		$scope.goPage = function (pageNum) {
			console.log("goPage", pageNum);
		}
}]);