/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('FilterController', 
	['$scope', 'SourcesModel', 'KeywordsModel', 'TimeRangesModel',
	function ($scope, SourcesModel, KeywordsModel, TimeRangesModel) {
		
		$scope.filterKeywords= KeywordsModel.getKeywords();
		$scope.filterSources = SourcesModel.getSources();
		$scope.filterTimeRanges = TimeRangesModel.getTimeRanges();
		
		$scope.test = 24 * 365;

		/*
			Keywords相关操作
		*/
		
		$scope.keywordsIsEditable = false;
		$scope.newKeyword = '';	

		function setFilterKeywords(keywords) {
			$scope.filterKeywords = keywords;
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