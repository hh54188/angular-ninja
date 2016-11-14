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

	var filterOptions = {
		keywords: ['example1', 'example2', 'example3'],
		selectedInterval: 24 * 365,
		selectedSubways: ['s1', 's4'],
		unselectedSources: ['ebay']
	};

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

	function _setVariable(name, value) {
		filterOptions[name] = value;
	}

	function _getVariable(name) {
		return filterOptions[name];
	}

	return {
		getData: function (pageNum) {
			return data;
		},
		// Keywords
		setKeywords: function (value) {
			_setVariable('keywords', value);
		},
		getKeywords: function () {
			return _getVariable('keywords');
		},
		// Interval
		setInterval: function (value) {
			_setVariable('selectedInterval', value);
		},
		getInterval: function () {
			return _getVariable('selectedInterval');
		},
		// Un-Select-Sources
		setUnselectedSources: function (value) {
			_setVariable('unselectedSources', value);
		},
		getUnselectedSources: function () {
			return _getVariable('unselectedSources');
		},
		// Subways
		setSubways: function (value) {
			_setVariable('selectedSubways', value);
		},
		getSubways: function () {
			return _getVariable('selectedSubways');
		}
	}
}])