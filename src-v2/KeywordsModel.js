angular.module('app')
.factory('KeywordsModel', 
	['KeywordsRepo', function(KeywordsRepo){

		return {
			getKeywords: function () {
				return KeywordsRepo.getKeywords()
			},
			deleteKeyword: function (word) {
				var result = KeywordsRepo.deleteKeyword(word);
				console.log("deleteKeyword===>", result);
				return result;
			},
			insertKeyword: function (word, newIndex) {
				var result = KeywordsRepo.insertKeyword(word, newIndex);
				console.log("insertKeyword===>", result);
				return result;
			},
			deleteAllKeywords: function () {
				var result = KeywordsRepo.deleteAllKeywords();
				console.log("deleteAllKeywords===>", result);
				return result;
			}
		}
}]);