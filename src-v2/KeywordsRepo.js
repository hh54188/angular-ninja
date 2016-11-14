angular.module('app')
.factory('KeywordsRepo', 
	['DataStorageService', function (DataStorageService) {

		var keywords = ['example1', 'example2', 'example3', 'example4', 'example5']
		// var keywords = [
		// 	'example1', 'example2', 
		// 	'example3', 'example4', 
		// 	'example5', 'example6', 
		// 	'example7', 'example8', 
		// 	'example9', 'example10'
		// ];

		return {
			getKeywords: function () {
				return DataStorageService.getKeywords();
			},
			insertKeyword: function (word, newIndex) {
				var keywords = DataStorageService.getKeywords();
				if (!word) {
					return keywords;
				}

				if (newIndex == undefined && keywords.indexOf(word) > -1) {
					alert("该关键词已经存在");
					return keywords;
				}			

				var length = keywords.length;

				if (newIndex == undefined) {
					keywords.push(word);
					return keywords;
				}

				if (newIndex < 0 || newIndex >= length) {
					return keywords;
				}

				var oldIndex = keywords.indexOf(word);
				keywords.splice(newIndex, 0, keywords.splice(oldIndex, 1)[0]);

				DataStorageService.setKeywords(keywords);
				return keywords;
			},			
			deleteKeyword: function (word) {
				var keywords = DataStorageService.getKeywords();
				var index = keywords.indexOf(word);
				if (index > -1) {
					keywords.splice(index, 1);
				}

				DataStorageService.setKeywords(keywords);
				return keywords;
			},
			deleteAllKeywords: function () {
				var keywords = [];
				DataStorageService.setKeywords(keywords);
				return keywords;
			}			
		}
}])