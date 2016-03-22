/*
	A module is a collection of services, directives, controllers, filters, and configuration information
	Usage：
		angular.module(name, [requires], [configFn]);
 */
angular.module('app').factory('FilterService', 
	['DataStorageService', 
	function(DataStorageService){

	var filterSources = [];
	var filterKeywords = [];
	var filterTimeRange = [0, 1, 3, 24, 24 * 7]; // 单位小时

	var data = DataStorageService.getAllData();
	data.forEach(function (item) {
		if (filterSources.indexOf(item.source) < 0 ) {
			filterSources.push(item.source);
		}
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