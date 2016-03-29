/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('FilterController', 
	['$scope', 'DataStorageService', 'GlobalConfigService', 
	function($scope, DataStorageService, GlobalConfigService){

	$scope.filterSourcesOptions = GlobalConfigService.getSourcesConfig();
	$scope.filterTimeRangeOptions = GlobalConfigService.getIntervalsConfig();

	var filterKeywords = $scope.filterKeywords = DataStorageService.getFilterKeywords();
	$scope.filterSources = DataStorageService.getFilterSources();
	$scope.filterTimeRange = DataStorageService.getFilterIntervals();

	$scope.sourceSelectChange = function () {
		console.log($scope.filterSources);
	}

	$scope.intervalSelectChange = function () {
		console.log($scope.filterTimeRange);
	}

	$scope.deleteKeyword = function (word) {
		filterKeywords = DataStorageService.deleteKeyword(word);
		console.log(filterKeywords);
		console.log($scope.filterKeywords);		
	}

	$scope.insertKeyword = function (word, index) {
		filterKeywords = [];
		console.log(filterKeywords);
		console.log($scope.filterKeywords);			
		// filterKeywords = DataStorageService.insertKeyword(word, index);
	}

	$scope.deleteAllKeywords = function () {
		filterKeywords = [];
		console.log(filterKeywords);
		console.log($scope.filterKeywords);
		// filterKeywords = DataStorageService.deleteAllKeywords();
		// debugger
		// $scope.filterKeywords = DataStorageService.deleteAllKeywords();
	}

}]);