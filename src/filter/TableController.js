angular.module('app')
.controller('TableController', 
	['$scope', '$rootScope', 'DataStorageService', 'GlobalConfigService',
	function($scope, $rootScope, DataStorageService, GlobalConfigService){
		$rootScope.$on('filterChanged', function (value) {
			debugger		
		});
		$scope.data = DataStorageService.getAllData();
		$scope.tableConfig = GlobalConfigService.getTableConfig();
}]);