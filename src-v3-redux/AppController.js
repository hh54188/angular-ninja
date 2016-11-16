/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('AppController', 
	['$scope', '$rootScope', 
	function ($scope, $rootScope) {

		Store.subscribe(function (state) {
			$scope.keywords = state.get('keywords').toJS();
			$scope.sources = state.get('sources').toJS();
		});

		var state = Store.getState();
		$scope.keywords = state.get('keywords').toJS();
		$scope.sources = state.get('sources').toJS();
		$scope.subways = state.get('subways').toJS();
		$scope.times = state.get('times').toJS();
		
		// $scope.filterKeywords= ['example1', 'example2', 'example3'];
		// $scope.filterSources = [
		// 	{
		// 		name: 'ebay',
		// 		checked: false,
		// 		url: 'http://example.com'
		// 	}
		// ];
		// $scope.filterSubways = ['s1', 's4'];
		// $scope.timeRangeOptions = [
		// 	{
		// 		interval: 1,
		// 		desc: '一小时内'
		// 	}, {
		// 		interval: 3,
		// 		desc: '三小时内'
		// 	}, {
		// 		interval: 24,
		// 		desc: '一天内'
		// 	}, {
		// 		interval: 24 * 7,
		// 		desc: '一周内'
		// 	},
		// 	{
		// 		interval: 24 * 365,
		// 		desc: '所有'
		// 	}				
		// ];
		// $scope.selectedInterval = 24 * 365;

		$scope.keyword = '';
		$scope.tempSelectedSubway = '';

		// UI Logic
		$scope.keywordsIsEditable = false;
		$scope.enableEditKeywords = function () {
			$scope.keywordsIsEditable = !$scope.keywordsIsEditable;
		}

		// Business Logic:
		// Keywords----------
		$scope.addKeyword = function (keyword) {
			Store.dispatch(addKeyword(keyword));
		}

		$scope.deleteKeyword = function (keyword) {
			Store.dispatch(deleteKeyword(keyword));
		}

		$scope.sortKeyword = function (oldIndex, newIndex) {
			Store.dispatch(sortKeyword({
				oldIndex: oldIndex,
				newIndex: newIndex
			}));
		}

		$scope.emptyKeywords = function () {
			Store.dispatch(emptyKeywords());
		}

		// Sources----------
		$scope.toggleSource = function (sourceId) {
			Store.dispatch(toggleSource(sourceId));
		}

		$scope.toggleTime = function (timeId) {
			
		}
}]);