/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('FilterController', 
	['$scope', 'DataStorageService', 'FilterService', 
	function($scope, DataStorageService, FilterService){
	
	var filterKeywords = FilterService.getKeywords();
	var filterSources = FilterService.getSources();
	var filterTimeRangeOptions = FilterService.getTimeRange();

	console.log("filterSources===>", filterSources);
	console.log("filterTimeRangeOptions===>", filterTimeRangeOptions);

	$scope.filterKeywords = filterKeywords;
	$scope.filterSources = filterSources;
	$scope.filterTimeRangeOptions = filterTimeRangeOptions;
	// 这是一个Angular的bug，不能直接赋值引用，详情见Angular Demo中的radio文件夹
	$scope.selectedTimeRange = Object.assign({}, (filterTimeRangeOptions.filter(function (ele, index) {
		return ele.checked;
	}))[0]);

	$scope.sourceSelectChange = function () {
		var result = $scope.filterSources.map(function (item) {
			return item.checked;
		});
		console.log(result);
	}

	$scope.intervalSelectChange = function () {
		console.log($scope.selectedTimeRange.interval);
	}
}]);