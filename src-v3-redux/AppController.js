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

		function assembleParameters(states) {

			function filterCheckedItem(items) {
				return items.filter(function (item) {
							return item.checked == true;
						}).map(function (item) {
							return item.id;
						});
			}

			return {
				page: states.pagination.cur,
				keywords: states.keywords,
				sourceIds: filterCheckedItem(states.sources),
				subwayIds: filterCheckedItem(states.subways),
				timeId: filterCheckedItem(states.times)
			}
		}

		function assignState(scope, state) {
			scope.keywords = state.get('keywords').toJS();
			scope.sources = state.get('sources').toJS();
			scope.subways = state.get('subways').toJS();
			scope.times = state.get('times').toJS();
			scope.data = state.get('data').toJS();
			scope.selectedTimeId = getSelectedTimeId(state.get('times'));
			scope.pagination = state.get('pagination').toJS();
			scope.appState = state.get('appState');
		}

		Store.subscribe(function (state) {
			assignState($scope, state);
			console.log($scope.sources.map(function (item) {
				return item.checked;
			}));
		});

		assignState($scope, Store.getState());

		$scope.tempKeyword = '';
		$scope.tempSubway = '';
		$scope.appState = '';

		// UI Logic
		$scope.keywordsIsEditable = false;
		$scope.enableEditKeywords = function () {
			$scope.keywordsIsEditable = !$scope.keywordsIsEditable;
		}

		function blurInputElementsInForm(form) {
			var inputs = Array.prototype.slice.call(form.querySelectorAll('input'));
			inputs.forEach(function (el) {
				el.blur();
			});
		}

		// Store.dispatch应该被bound起来，参考redux官方文档的的关于action部分：
		// http://redux.js.org/docs/basics/Actions.html
		// const boundAddTodo = (text) => dispatch(addTodo(text))
		// const boundCompleteTodo = (index) => dispatch(completeTodo(index))

		// 这个不是一个好的实践，
		// 但是又没有更好的办法，所以暂时先这样
		function dispatchRequestData() {
			Store.dispatch(
				requestData(
					assembleParameters(Store.getState().toJS())
				)
			);			
		}

		// Business Logic:
		// Keywords----------
		$scope.addKeyword = function (event, keyword) {
			// UI Logic, bad practice
			blurInputElementsInForm(event.target);
			$scope.tempKeyword = ''; 

			Store.dispatch(addKeyword(keyword));
			dispatchRequestData();
		}

		$scope.deleteKeyword = function (keyword) {
			Store.dispatch(deleteKeyword(keyword));
			dispatchRequestData();
		}

		$scope.sortKeyword = function (oldIndex, newIndex) {
			Store.dispatch(sortKeyword({
				oldIndex: oldIndex,
				newIndex: newIndex
			}));
			dispatchRequestData();
		}

		$scope.emptyKeywords = function () {
			Store.dispatch(emptyKeywords());
			dispatchRequestData();
		}

		// Sources----------
		$scope.toggleSource = function (sourceId) {
			Store.dispatch(toggleSource(sourceId));
			dispatchRequestData();
		}

		// Time----------
		$scope.toggleTime = function (timeId) {
			Store.dispatch(chooseTime(timeId));
			dispatchRequestData();
		}

		// Subway----------
		$scope.toggleSubway = function (subwayId) {
			$scope.tempSubway = ''; // UI Logic, bad practice
			Store.dispatch(toggleSubway(subwayId));
			dispatchRequestData();
		}

		$scope.deselectSubways = function () {
			Store.dispatch(deselectSubways());
			dispatchRequestData();
		}

		// Pagination----------
		$scope.goPage = function (pageNum) {
			$scope.$broadcast('pagination:setCur', pageNum);
			Store.dispatch(turnToPage(pageNum));
			dispatchRequestData();
		}
}]);