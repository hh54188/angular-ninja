angular.module('app', [])
.directive('cusSuggestbox', function ($window) {
	return {
		compile: function () {
			return function link($scope, $linkElement, $attrs) {
				var parentNode = $linkElement.parent();
				var userInputBox = parentNode.find('input');
				var userInputStyle = $window.getComputedStyle(userInputBox[0]);
				var userInputWidth = parseInt(userInputStyle.width);
				var userInputHeight = parseInt(userInputStyle.height);
				$linkElement.css({
					width: '100%',
					position: 'absolute',
					left: 0,
					top: userInputHeight - 1 + 'px',
					zIndex: 1
				});
			}
		}
	}
})
.directive('cusSuggestItem', function ($sce) {
	return {
		link: function ($scope, $linkElement, $attrs) {
			$scope.emphasize = function (originWord) {
				return $sce.trustAsHtml(
							originWord.replace(
								$scope.userInput, '<strong>' + $scope.userInput + '</strong>'
							)
						);
			}	
		}
	}
})
/*
	Use controllers to:
	- Set up the initial state of the $scope object.
	- Add behavior to the $scope object.
	
	Do not use controllers to:
	- Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
	- Format input — Use angular form controls instead.
	- Filter output — Use angular filters instead.
	- Share code or state across controllers — Use angular services instead.
	- Manage the life-cycle of other components (for example, to create service instances).
*/
.controller('keywordsInputController', function ($scope, $sce, $window) {
	$scope.userInput = '';
	$scope.suggestResult = [];
	$scope.suggestSelectIndex = -1;
	$scope.enableSuggestEdit = false;
	$scope.keywords = [];

	var suggestMaxCount = 10;

	// var globalDictionary=[{word:"dx06",tags:[],},{word:"dx08",tags:[],},{word:"dx11",tags:[],},{word:"dx12",tags:[],},{word:"dx13",tags:[],},{word:"dx14",tags:[],},{word:"batman",tags:[],}];
	var globalDictionary = $window.globalDictionary;
	var dictionary = globalDictionary;

	function resetSuggest() {
		$scope.suggestSelectIndex = -1;
		$scope.suggestResult = [];
	}

	$scope.resetSuggest = resetSuggest;

	$scope.test = function () {
		console.log("---");
	}

	$scope.submitForm = function () {
		var targetForm = $scope.keywordsForm; // 这么做是不是不太优雅，有操作DOM的嫌疑？

		if (!targetForm.$valid) {
			return false;
		}

		if ($scope.keywords.indexOf($scope.userInput) > -1) {
			alert("该关键词已经存在");
			return false;
		}

		$scope.keywords.push($scope.userInput);
		$scope.userInput = '';

		targetForm.keywordsInput.$setPristine();
		targetForm.keywordsInput.$setUntouched();

		resetSuggest();
	}

	$scope.removeThisWord = function (word) {
		for (var i = 0; i < $scope.keywords.length; i++) {
			if ($scope.keywords[i] == word) {
				$scope.keywords.splice(i, 1);
				if ($scope.keywords.length === 0) {
					$scope.enableSuggestEdit = false;
				}
				return true;
			}
		}
	}
	
	$scope.forwardThisWord = function (word) {
		for (var i = 0; i < $scope.keywords.length; i++) {
			if ($scope.keywords[i] == word) {
				var j = i - 1;
				if (j < 0) {
					return;
				}

				var temp = $scope.keywords[j];
				$scope.keywords[j] = $scope.keywords[i];
				$scope.keywords[i] = temp;
				return;
			}
		}		
	}

	$scope.backwardThisWord = function (word) {
		for (var i = 0; i < $scope.keywords.length; i++) {
			if ($scope.keywords[i] == word) {
				var j = i + 1;
				if (j >= $scope.keywords.length) {
					return;
				}

				var temp = $scope.keywords[j];
				$scope.keywords[j] = $scope.keywords[i];
				$scope.keywords[i] = temp;
				return;
			}
		}
	}

	// Change event handler
	$scope.giveSuggest = function () {
		resetSuggest();
		for (var i = 0; i < dictionary.length; i++) {
			var tempWord = dictionary[i].word;
			if ($scope.userInput 
				&& tempWord.indexOf($scope.userInput) > -1
				&& $scope.keywords.indexOf(tempWord) < 0) {

				$scope.suggestResult.push(dictionary[i]);
				// 最多只显示10个建议词
				if ($scope.suggestResult.length == suggestMaxCount) {
					break;
				}
			}
		}
	}

	// Keyup event handler
	$scope.selectFromSuggest = function ($event) {
		if (!$scope.suggestResult.length) {
			return false;
		}

		var keyCode = $event.keyCode;
		var suggestLength = $scope.suggestResult.length;
		switch (keyCode) {
			case 38:
				$scope.suggestSelectIndex = --$scope.suggestSelectIndex < -1
											? -1
											: $scope.suggestSelectIndex;				
				break;
			case 40:
				$scope.suggestSelectIndex = ++$scope.suggestSelectIndex > suggestLength - 1
											? suggestLength - 1
											: $scope.suggestSelectIndex;			
				break;
		}

		if ($scope.suggestSelectIndex !== -1) {
			$scope.userInput = $scope.suggestResult[$scope.suggestSelectIndex].word;
		}		
	}

	$scope.emptyKeywords = function () {
		// 不如使用自定义的模态对话框？
		if (confirm("Sure to delete?")) {
			$scope.keywords = [];
		}
	}
})