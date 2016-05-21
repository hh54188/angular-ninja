angular.module('app')
.factory('KeywordsModel', 
	['KeywordsRepo', function(KeywordsRepo){

		return {
			getKeywords: function () {
				return KeywordsRepo.getRepo()
			},
			deleteKeyword: function (word) {
				var result = KeywordsRepo.deleteKeyword(word);
				return result;
			},
			insertKeyword: function (word, newIndex) {
				var result = KeywordsRepo.insertKeyword(word, newIndex);
				return result;
			},
			deleteAllKeywords: function () {
				var result = KeywordsRepo.deleteAllKeywords();
				return result;
			}
		}
}]);