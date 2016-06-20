angular.module('app')
.controller('TableController',
	['$scope', 'DataModel', '$rootScope',
	function($scope, DataModel, $rootScope){
		
		$rootScope.$on('filterChanged', function () {
			console.log('filterChanged');
		});

		var data = DataModel.getData();
		var metaInfo = data.metaInfo;

		$scope.records = data.records;
		$scope.pageInfo = metaInfo.pageInfo; 

		$scope.goPage = function (pageNum) {
			console.log(pageNum);
		}
}]);