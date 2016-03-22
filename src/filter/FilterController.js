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
	var filterTimeRange = FilterService.getTimeRange();

	$scope.filterKeywords = filterKeywords;
	$scope.filterSources = filterSources;
	$scope.filterTimeRange = filterTimeRange;

	$scope.source2URL = function (sourceName) {
		return DataStorageService.mapSource2URL(sourceName);
	}

	$scope.hours2Day = function (hours) {
		var day = Math.floor(hours / 24);
		var week = Math.floor(day / 7);
		
		if (!hours) {
			return '所有';
		} else if (day < 1) {
			return hours + '小时';
		} else if (day < 7) {
			return day + '天';
		} else if (day < 30) {
			return week + '周';
		}
	}

}]);