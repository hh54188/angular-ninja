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
		function setSubways(subways) {
			$rootScope.$broadcast('filterChanged');
			// TEST START
			subways.forEach(function (sub) {
				console.log(sub.desc, sub.checked);
			})
			// TEST END
			$scope.filterSubways = subways;
		}

		$scope.tempSelectedSubway = '';
		$scope.tempSelectedChanged = function () {
			console.log($scope.tempSelectedSubway);
		}
		$scope.addSelectedSubway = function () {
			setSubways(
				SubwaysModel.addSelectedSubway($scope.tempSelectedSubway)
			);
			$scope.tempSelectedSubway = '';
		}
		$scope.clearSelectedSubways = function () {
			setSubways(
				SubwaysModel.clearSelectedSubways($scope.tempSelectedSubway)
			);
		}
		$scope.removeSubway = function (val) {
			setSubways(
				SubwaysModel.removeSubway(val)
			);			
		}
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
			if (!$scope.newKeyword) {
				console.log('[ERROR]===>', 'newKeyword is empty');
				return false;
			}

			if ($scope.filterKeywords.indexOf($scope.newKeyword) > -1) {
				$scope.newKeyword = '';
				console.log('[ERROR]===>', 'keyword already exist');
				return false;
			}
			console.log();

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