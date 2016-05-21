angular.module('app')
.factory('TimeRangesModel', 
	['TimeRangesRepo', function(TimeRangesRepo){
		


		return {
			getTimeRanges: function () {
				var filterTimeRanges = TimeRangesRepo.getPlainTimeRanges();
				var selectedInterval = TimeRangesRepo.getSelectedInterval();

				for (var i = 0; i < filterTimeRanges.length; i++) {
					var timeRange = filterTimeRanges[i];
					if (selectedInterval <= timeRange.interval) {
						timeRange.checked = true;
						break;
					}
				}				
				
				return filterTimeRanges;			
			}
		}
}]);