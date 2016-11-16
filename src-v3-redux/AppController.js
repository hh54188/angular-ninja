/*
	https://docs.angularjs.org/error/$injector/unpr?p0=$FilterServiceProvider%20%3C-%20$FilterService%20%3C-%20FilterController
	定义Controller时需要注意
	Make sure you only define each module with the angular.module(name, [requires]) syntax once across your entire project. Retrieve it for subsequent use with angular.module(name)
 */
angular.module('app')
.controller('AppController', 
	['$scope', '$rootScope', 
	function ($scope, $rootScope) {

		function getSelectedTimeId(times) {
			return times.find(function (item) {
				return item.get('checked') == true;
			}).get('id');
		}

		function  assignState(scope, state) {
			scope.keywords = state.get('keywords').toJS();
			scope.sources = state.get('sources').toJS();
			scope.subways = state.get('subways').toJS();
			scope.times = state.get('times').toJS();
			// scope.data = state.get('data').toJS();
			scope.selectedTimeId = getSelectedTimeId(state.get('times'));
			scope.pagination = state.get('pagination').toJS();
		}

		Store.subscribe(function (state) {
			assignState($scope, state);
		});

		assignState($scope, Store.getState());

		$scope.tempKeyword = '';
		$scope.tempSubway = '';

		// UI Logic
		$scope.keywordsIsEditable = false;
		$scope.enableEditKeywords = function () {
			$scope.keywordsIsEditable = !$scope.keywordsIsEditable;
		}

		// Business Logic:
		// Keywords----------
		$scope.addKeyword = function (keyword) {
			$scope.tempKeyword = ''; // UI Logic, bad practice
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

		// Time----------
		$scope.toggleTime = function (timeId) {
			Store.dispatch(chooseTime(timeId));
		}

		// Subway----------
		$scope.toggleSubway = function (subwayId) {
			$scope.tempSubway = ''; // UI Logic, bad practice
			Store.dispatch(toggleSubway(subwayId));
		}

		$scope.deselectSubways = function () {
			Store.dispatch(deselectSubways());
		}

		$scope.goPage = function (pageNum) {
			$scope.$broadcast('pagination:setCur', pageNum);
			Store.dispatch(turnToPage(pageNum));
		}
}]);