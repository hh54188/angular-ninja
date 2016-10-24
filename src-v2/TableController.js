angular.module('app')
.controller('TableController',
	['$http', '$scope', 'DataModel', '$rootScope', 
	'SourcesModel', 'KeywordsModel', 'TimeRangesModel', 'SubwaysModel', 
	function($http, $scope, DataModel, $rootScope, 
		SourcesModel, KeywordsModel, TimeRangesModel, SubwaysModel){

		function joinQueryParams(keywords, unselectedSources, subways, selectedInterval) {
			var url = 'http://127.0.0.1:8080/query?'
						+ (keywords.length? ('keywords=' + keywords.join('+') + '&'): '')
						+ (unselectedSources.length? ('unsources=' + unselectedSources.join('+') + '&'): '')
						+ (subways.length? ('subways=' + subways.join('+') + '&'): '')
						+ 'interval=' + selectedInterval;

			$http.get(url).then(function successCallback(response) {
			// $http.get('http://127.0.0.1:8080/query', {
			// 	params : {
			// 		keywords: keywords,
			// 		unsources: unselectedSources,
			// 		subways: subways,
			// 		interval: selectedInterval
			// 	},
			// 	timeout: 1000 * 5
			}).then(function successCallback(response) {

			}, function errorCallback(response) {
				
			});						
		}
		
		$rootScope.$on('filterChanged', function () {
			var keywords= KeywordsModel.getKeywords();
			var unselectedSources = SourcesModel.getUnselectedSources();
			var subways = SubwaysModel.getSelectedSubways();
			var selectedInterval = TimeRangesModel.getSelectedInterval();
			// joinQueryParams(keywords, unselectedSources, subways, selectedInterval);
			console.log('------------------------------');
			// console.log("Submit keywords===>", keywords);
			// console.log("Submit unselectedSources===>", unselectedSources);
			// console.log("Submit selectedInterval===>", selectedInterval)
			// console.log("Submit subways===>", subways);
		});

		var data = DataModel.getData();

		$scope.list = data.list;
		$scope.pageInfo = data.pageInfo; 

		$scope.goPage = function (pageNum) {
			console.log(pageNum);
		}
}]);