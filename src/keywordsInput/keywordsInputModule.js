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
.controller('keywordsInputController', function ($scope, $sce) {
	
	$scope.userInput = '';
	$scope.suggestResult = [];
	$scope.suggestSelectIndex = -1;
	$scope.enableSuggestEdit = false;
	$scope.keywords = [];

	var suggestMaxCount = 10;

	var globalDictionary=[{word:"dx06",tags:[],},{word:"dx08",tags:[],},{word:"dx11",tags:[],},{word:"dx12",tags:[],},{word:"dx13",tags:[],},{word:"dx14",tags:[],},{word:"batman",tags:[],}];
	var dictionary = globalDictionary;

	function resetSuggest() {
		$scope.suggestSelectIndex = -1;
		$scope.suggestResult = [];
	}

	$scope.resetSuggest = resetSuggest;

	$scope.submitForm = function (isvalid) {
		if (!isvalid) {
			return false;
		}

		if ($scope.keywords.indexOf($scope.userInput) > -1) {
			alert("该关键词已经存在");
			return false;
		}

		$scope.keywords.push($scope.userInput);
		$scope.userInput = '';
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
			if ($scope.userInput && tempWord.indexOf($scope.userInput) > -1) {
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

	$scope.emphasizeMatchedPart = function (originWord) {
		return $sce.trustAsHtml(
					originWord.replace(
						$scope.userInput, '<strong>' + $scope.userInput + '</strong>'
					)
				);
	}	

	$scope.emptyKeywords = function () {
		// 不如使用自定义的模态对话框？
		if (confirm("Sure to delete?")) {
			$scope.keywords = [];
		}
	}
})