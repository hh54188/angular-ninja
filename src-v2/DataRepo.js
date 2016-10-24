angular.module('app')
.factory('DataRepo', 
	['$http', 'DataStorageService',
	function($http, DataStorageService){

		var data = {
			list: [
				{
					source: 'example',
					title: 'example',
					url: 'http://www.example.com/',
					date: +new Date,
					price: ''
				},
				{
					source: 'example',
					title: 'example',
					url: 'http://www.example.com/',
					date: +new Date,
					price: ''
				},
				{
					source: 'example',
					title: 'example',
					url: 'http://www.example.com/',
					date: +new Date,
					price: ''
				}
			],
			pageInfo: {
				total: 5,
				cur: 1
			}
		}
	
	return {
		getRepo: function () {
			return DataStorageService.getData();
		}
	}		
}])