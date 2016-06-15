angular.module('app')
.factory('FilterRepo', 
	[function(){

		var data = {
			unselectedSources: ['ebay'],
			selectedInterval: 24 * 365,
			selectedSubways: []
		}

		return {
			getRepo: function () {
				return data;
			}		
		}
}])