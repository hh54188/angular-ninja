/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('AppController', 
	['$scope', '$rootScope', 
	function ($scope, $rootScope) {
		
		$scope.filterKeywords= ['example1', 'example2', 'example3'];
		$scope.filterSources = ['ebay'];
		$scope.filterSubways = ['s1', 's4'];
		$scope.timeRangeOptions = [
			{
				interval: 1,
				desc: '一小时内'
			}, {
				interval: 3,
				desc: '三小时内'
			}, {
				interval: 24,
				desc: '一天内'
			}, {
				interval: 24 * 7,
				desc: '一周内'
			},
			{
				interval: 24 * 365,
				desc: '所有'
			}				
		];
		$scope.selectedInterval = 24 * 365;

		$scope.sourceSelectChange = function () {

		}

		$scope.intervalSelectChange = function () {

		}

		$scope.tempSelectedChanged = function () {

		}

		$scope.addSelectedSubway = function () {

		}

		$scope.clearSelectedSubways = function () {

		}

		$scope.removeSubway = function (val) {

		}

		$scope.submitForm = function () {

		}
		
		$scope.enableEditKeywords  = function () {

		}		

		$scope.deleteKeyword = function (word) {

		}

		$scope.insertKeyword = function (word, index) {

		}

		$scope.deleteAllKeywords = function () {

		}		

}]);