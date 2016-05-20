angular.module('app')
.factory('FilterRepo', 
	[function(){

		var data = {
			selectedSources: ['ebay', '贴吧', '淘宝'],
			selectedInterval: 24 * 365
		}

		return {
			getRepo: function () {
				return data;
			}		
		}
}])