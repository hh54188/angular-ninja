/*
	A module is a collection of services, directives, controllers, filters, and configuration information
	Usage：
		angular.module(name, [requires], [configFn]);
 */
angular.module('app').factory('FilterService', 
	['DataStorageService', 'GlobalConfigService',
	function(DataStorageService, GlobalConfigService){

	var filterSources = GlobalConfigService.getFilterSources();
	var filterTimeRange =GlobalConfigService.getFilterIntervals();
	var filterKeywords = [1, 2, 3];

	var selectedSources = [true, true, true, true]; // Get from localStorage or ajax;
	var selectedTimeInterval = 0;  // 最接近的

	filterSources.forEach(function (sourceItem, index) {
		sourceItem.checked = selectedSources[index];
	});

	filterTimeRange.forEach(function (intervalItem, index) {
		intervalItem.checked = (index === selectedTimeInterval? true: false);
	});



	return {
		getKeywords: function () {
			return filterKeywords;
		},
		getSources: function () {
			return filterSources;
		},
		getTimeRange: function () {
			return filterTimeRange;
		}
	}
}])