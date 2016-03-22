/*
	A module is a collection of services, directives, controllers, filters, and configuration information
	Usage：
		angular.module(name, [requires], [configFn]);
 */
angular.module('app').factory('FilterService', ['DataStorageService', function(DataStorageService){

	var filterPropertyName = ['source']; // To config
	var filterPropertyVal = {};
	var filterKeywords = [];

	filterPropertyName.forEach(function (name) {
		filterPropertyVal[name] = [];
	});

	var data = DataStorageService.getAllData();
	data.forEach(function (item) {
		filterPropertyName.forEach(function (name) {
			var val = item[name];
			if (filterPropertyVal[name].indexOf(val) < 0) {
				filterPropertyVal[name].push(val);
			}
		});
	});

	return {
		getKeywords: function () {
			return filterKeywords;
		},
		getProperties: function () {
			return filterPropertyVal;
		}
	}
}])