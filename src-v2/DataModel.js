angular.module('app')
.factory('DataModel', 
	['FilterModel', 'DataRepo',
	function(FilterModel, DataRepo){
		return {
			getData: function () {
				return DataRepo.getData();
			}
		}
}])