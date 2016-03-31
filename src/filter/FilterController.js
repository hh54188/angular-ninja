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

	$scope.filterKeywords = DataStorageService.getFilterKeywords();
	$scope.filterSources = DataStorageService.getFilterSources();
	$scope.filterTimeRange = DataStorageService.getFilterIntervals();

	$scope.keywordsIsEditable = false;
	$scope.newKeyword = '';

	function setFilterKeywords(keywords) {
		console.log("FilterController:===>setFilterKeywords", keywords);
		$scope.filterKeywords = keywords;
	}

	function disableEditKeywords() {
		if (!filterKeywords.length) {
			$scope.keywordsIsEditable = false;
		}
	}

	$scope.submitForm = function () {

		setFilterKeywords(
			DataStorageService.insertKeyword($scope.newKeyword)
		);
		$scope.newKeyword = '';		
	}

	$scope.enableEditKeywords  = function () {
		$scope.keywordsIsEditable = !$scope.keywordsIsEditable;
	}

	$scope.sourceSelectChange = function () {
		DataStorageService.setFilterSources($scope.filterSources);
	}

	$scope.intervalSelectChange = function () {
		DataStorageService.setFilterIntervals($scope.filterTimeRange);
	}

	$scope.deleteKeyword = function (word) {
		setFilterKeywords(
			DataStorageService.deleteKeyword(word)
		);
		disableEditKeywords();
	}

	$scope.insertKeyword = function (word, index) {
		setFilterKeywords(
			DataStorageService.insertKeyword(word, index)
		);
	}

	$scope.deleteAllKeywords = function () {
		setFilterKeywords(
			DataStorageService.deleteAllKeywords()		
		);
		disableEditKeywords();
	}

}]);