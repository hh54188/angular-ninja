angular.module('app')
.factory('SubwaysModel', 
	['SubwaysRepo', function(SubwaysRepo){

		var subwaysOptions = SubwaysRepo.getSubways();
		var getSelectedSubways = SubwaysRepo.getSelectedSubways();

		subwaysOptions.forEach(function (subway) {
			if (getSelectedSubways.indexOf(subway.val) > -1) {
				subway.checked = true;
			} else {
				subway.checked = false;
			}
		});		

		return {
			getSubways: function () {
				return subwaysOptions
			}
		}
}]);