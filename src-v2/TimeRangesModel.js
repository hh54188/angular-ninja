angular.module('app')
.factory('TimeRangesModel', 
	['TimeRangesRepo', function(TimeRangesRepo){
		
		return {
			getTimeRanges: function () {
				var timeRangesOptions = TimeRangesRepo.getPlainTimeRanges();
				var selectedInterval = TimeRangesRepo.getSelectedInterval();;				
				
				return {
					options: timeRangesOptions,
					selectedInterval: selectedInterval
				};			
			},
			setSelectedInterval: function (selectedInterval) {
				TimeRangesRepo.setSelectedInterval(selectedInterval);
			},
			getSelectedInterval: function () {
				return TimeRangesRepo.getSelectedInterval();
			}
		}
}]);