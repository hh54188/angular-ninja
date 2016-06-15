/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('FilterController', 
	['$scope', '$rootScope', 'SourcesModel', 'KeywordsModel', 'TimeRangesModel', 'SubwaysModel', 
	function ($scope, $rootScope, SourcesModel, KeywordsModel, TimeRangesModel, SubwaysModel) {
		
		$scope.filterKeywords= KeywordsModel.getKeywords();
		$scope.filterSources = SourcesModel.getSources();
		$scope.filterSubways = SubwaysModel.getSubways();

		var filterTimeRanges = TimeRangesModel.getTimeRanges();
		$scope.timeRangeOptions = filterTimeRanges.options;
		$scope.selectedInterval = filterTimeRanges.selectedInterval;
		/*
			Sources相关操作
		*/
		$scope.sourceSelectChange = function () {
			SourcesModel.setUnselectedSources($scope.filterSources);
			$rootScope.$broadcast('filterChanged');
		}
		/*
			TimeRange相关操作
		*/
		$scope.intervalSelectChange = function () {
			TimeRangesModel.setSelectedInterval($scope.selectedInterval);
			$rootScope.$broadcast('filterChanged');
		}
		/*
			Subways相关操作
		*/


		/*
			Keywords相关操作
		*/
		
		$scope.keywordsIsEditable = false;
		$scope.newKeyword = '';	

		function setFilterKeywords(keywords) {
			$scope.filterKeywords = keywords;
			$rootScope.$broadcast('filterChanged');
		}

		$scope.submitForm = function () {
			setFilterKeywords(
				KeywordsModel.insertKeyword($scope.newKeyword)
			);
			$scope.newKeyword = '';		
		}


		function disableEditKeywords() {
			if (!$scope.filterKeywords.length) {
				$scope.keywordsIsEditable = false;
			}
		}
		
		$scope.enableEditKeywords  = function () {
			$scope.keywordsIsEditable = !$scope.keywordsIsEditable;
		}		

		$scope.deleteKeyword = function (word) {
			setFilterKeywords(
				KeywordsModel.deleteKeyword(word)
			);
			disableEditKeywords();
		}

		$scope.insertKeyword = function (word, index) {
			setFilterKeywords(
				KeywordsModel.insertKeyword(word, index)
			);
		}

		$scope.deleteAllKeywords = function () {
			setFilterKeywords(
				KeywordsModel.deleteAllKeywords()		
			);
			disableEditKeywords();
		}		

}]);