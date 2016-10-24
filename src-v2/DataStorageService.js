angular.module('app')
.factory('DataStorageService',
	['$rootScope', '$http', function($rootScope, $http){

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

	var keywords = ['这', '是', '测试'];

	var selectedInterval = 24 * 365;

	var selectedSubways = ['s1', 's4'];

	var unselectedSources = ['ebay'];

	function fetchServerData() {
		$http.get('http://127.0.0.1/test', {
			params: {
				keywords: keywords.join('+'),
				interval: selectedInterval
			}
		}).then(function successCallback(response) {
			// debugger
		}, function errorCallback(response) {
			// debugger
		})
	}

	return {
		getData: function () {
			return data;
		}
	}
}])