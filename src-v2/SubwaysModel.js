angular.module('app')
.factory('SubwaysModel', 
	['SubwaysRepo', function(SubwaysRepo){

		function mergeSelected2Options() {
			var subwaysOptions = SubwaysRepo.getSubwayOptions();
			var getSelectedSubways = SubwaysRepo.getSelectedSubways();

			subwaysOptions.forEach(function (subway) {
				if (getSelectedSubways.indexOf(subway.val) > -1) {
					subway.checked = true;
				} else {
					subway.checked = false;
				}
			});

			return subwaysOptions;
		}

		return {
			getSubways: function () {
				return mergeSelected2Options();
			},
			getSelectedSubways: function () {
				return SubwaysRepo.getSelectedSubways();
			},
			addSelectedSubway: function (subway) {
				SubwaysRepo.addSelectedSubway(subway);
				return mergeSelected2Options();
			},
			clearSelectedSubways: function () {
				SubwaysRepo.clearSelectedSubways();
				return mergeSelected2Options();
			},
			removeSubway: function (val) {
				SubwaysRepo.removeSubway(val);
				return mergeSelected2Options();
			}
		}
}]);