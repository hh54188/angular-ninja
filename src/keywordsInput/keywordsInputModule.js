angular.module('app', [])
.controller('keywordsInputController', function ($scope) {
	
	$scope.userInput = '';
	$scope.suggestResults = [];
	$scope.keywords = [];

	var suggestIndex = -1;

	function _resetSuggest() {
		suggestIndex = -1;
		$scope.suggestResults = [];
	}

	$scope.giveSuggest = function () {
		_resetSuggest();
	}

	$scope.selectFromSuggest = function ($event) {
		var keyCode = $event.keyCode;
		console.log(keyCode);
	}
})