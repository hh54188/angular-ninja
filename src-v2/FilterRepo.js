angular.module('app')
.factory('FilterRepo', 
	[function(){

		var data = {
			unselectedSources: ['ebay'],
			selectedInterval: 24 * 365,
			keywords: ['example1', 'example2']
		}

		return {
			getRepo: function () {
				return data;
			}		
		}
}])