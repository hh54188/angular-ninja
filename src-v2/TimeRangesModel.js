angular.module('app')
.factory('TimeRangesModel', 
	['TimeRangesRepo', function(TimeRangesRepo){
		
		return {
			getTimeRanges: function () {
				var timeRangesOptions = TimeRangesRepo.getTimeRangesOptions();
				var selectedInterval = TimeRangesRepo.getSelectedInterval();;				
				// TEST START
				// console.log("Default selectedInterval===>", selectedInterval);
				// timeRangesOptions.forEach(function (option) {
				// 	console.log(option.desc, option.interval);
				// });
				// TEST END

				return {
					options: timeRangesOptions,
					selectedInterval: selectedInterval
				};			
			},
			setSelectedInterval: function (selectedInterval) {
				// console.log("selectedInterval===>", selectedInterval, "hours");
				TimeRangesRepo.setSelectedInterval(selectedInterval);
			},
			getSelectedInterval: function () {
				return TimeRangesRepo.getSelectedInterval();
			}
		}
}]);