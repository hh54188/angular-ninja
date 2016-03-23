angular.module('app')
.filter('Hours2DayFilter', function () {
	return function (hours) {
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
});