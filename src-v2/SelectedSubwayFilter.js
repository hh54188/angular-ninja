angular.module('app')
.filter('SelectedSubwayFilter', [function () {
	return function (subways) {
		return subways.filter(function (item) {
			return item.checked;
		});
	}
}]);