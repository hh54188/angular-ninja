angular.module('app')
.factory('TimeRangesRepo', 
	['DataStorageService', function (DataStorageService) {
		
		var timeRanges = [
			{
				interval: 1,
				desc: '一小时内'
			}, {
				interval: 3,
				desc: '三小时内'
			}, {
				interval: 24,
				desc: '一天内'
			}, {
				interval: 24 * 7,
				desc: '一周内'
			},
			{
				interval: 24 * 365,
				desc: '所有'
			}				
		];

		return {
			getTimeRangesOptions: function () {
				return timeRanges;
			},
			getSelectedInterval: function () {
				return DataStorageService.getInterval();
			},
			setSelectedInterval: function (interval) {
				DataStorageService.setInterval(interval);
			}
		}
}]);