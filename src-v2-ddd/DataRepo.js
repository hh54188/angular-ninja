angular.module('app')
.factory('DataRepo', 
	['$http', 'DataStorageService',
	function($http, DataStorageService){
	
	return {
		getData: function (pageNum) {
			return DataStorageService.getData(pageNum);
		}
	}		
}])