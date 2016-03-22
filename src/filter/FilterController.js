/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('FilterController', 
	['$scope', 'GlobalConfigService', 'DataStorageService', 'FilterService', 
	function($scope, GlobalConfigService, DataStorageService, FilterService){
	
	var filterKeywords = FilterService.getKeywords();
	var filterProperties = FilterService.getProperties();

	$scope.filterKeywords = filterKeywords;
	$scope.filterProperties = filterProperties;

}]);