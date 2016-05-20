angular.module('app')
.controller('TableController',
	['$scope', 'DataModel',
	function($scope, DataModel){
		
		var data = DataModel.getData();
		var metaInfo = data.metaInfo;

		$scope.records = data.records;
		$scope.pageInfo = metaInfo.pageInfo; 

		$scope.goPage = function (pageNum) {
			console.log(pageNum);
		}
}]);