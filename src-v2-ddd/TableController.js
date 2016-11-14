angular.module('app')
.controller('TableController',
	['$http', '$scope', 'DataModel', '$rootScope', 
	'SourcesModel', 'KeywordsModel', 'TimeRangesModel', 'SubwaysModel', 
	function($http, $scope, DataModel, $rootScope, 
		SourcesModel, KeywordsModel, TimeRangesModel, SubwaysModel){
		
		function getData() {
			var data = DataModel.getDataByPage();
			$scope.list = data.list;
			$scope.pageInfo = data.pageInfo; 			
		}

		$rootScope.$on('filterChanged', function () {
			getData();
			// var keywords= KeywordsModel.getKeywords();
			// var unselectedSources = SourcesModel.getUnselectedSources();
			// var subways = SubwaysModel.getSelectedSubways();
			// var selectedInterval = TimeRangesModel.getSelectedInterval();

			// console.log("Submit keywords===>", keywords);
			// console.log("Submit unselectedSources===>", unselectedSources);
			// console.log("Submit selectedInterval===>", selectedInterval)
			// console.log("Submit subways===>", subways);
		});

		getData(); 

		$scope.goPage = function (pageNum) {
			console.log(pageNum);
		}
}]);