angular.module('app')
.controller('FilterController', function($scope, $rootScope){
	
	$rootScope.filter = {
		source: {
			tieba: true,
			ebay: true,
			taobao: true,
			ac: true
		},
		time: 'all',
		order: 'latest',
		exclude: {
			accessories: true,
			headStatue: true,
			noht: true,
			wantbuy: true
		}
	};

	$scope.sourceChanged = function () {
		console.log($scope.filter.source);
	}

	$scope.timeChanged = function () {
		console.log($scope.filter.time);
	}

	$scope.orderChanged = function () {
		console.log($scope.filter.order);
	}

	$scope.excludeChanged = function () {
		console.log($scope.filter.exclude);
	}
})
.filter('sourceFilter', function ($rootScope) {
	return function (inputData) {
		var outputData = [];
		var sourceFilterConfig = $rootScope.filter.source;

		for (var i = 0; i < inputData.length; i++) {
			var item = inputData[i];
			if (sourceFilterConfig[item.source]) {
				outputData.push(item);
			}
		}

		return outputData;
	}
});