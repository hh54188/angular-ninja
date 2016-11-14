angular.module('app')
.filter('UnselectedSubwayFilter', [function () {
	return function (subways) {
		return subways.filter(function (item) {
			return !item.checked;
		});
	}
}]);