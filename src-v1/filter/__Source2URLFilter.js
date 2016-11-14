angular.module('app')
.filter('Source2URLFilter', ['DataStorageService', function (DataStorageService) {
	return function (inputData) {
		var outputData = DataStorageService.mapSource2URL(inputData);
		return outputData;
	}
}]);