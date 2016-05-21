angular.module('app')
.factory('DataRepo', 
	['$http',
	function($http){

		var data = {
			records: [
				{
					source: 'example',
					title: 'example',
					url: 'http://www.example.com/',
					date: +new Date,
					price: ''
				}
			],
			metaInfo: {
				pageInfo: {
					total: 5,
					cur: 1
				}
			}
		}
	
	return {
		getRepo: function () {
			return data;
		}
	}		
}])