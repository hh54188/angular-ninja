angular.module('app')
.factory('SourcesRepo',
	['DataStorageService', function(DataStorageService){

		var sourcesOptions = [
			{
				name: 'ebay',
				url: 'http://www.ebay.com'
			},
			{
				name: '贴吧',
				url: 'http://tieba.baidu.com'
			},
			{
				name: '淘宝',
				url: 'http://2.taobao.com'
			},
			{
				name: 'AC商城',
				url: 'https://mall.actoys.net/index.php?app=search&cate_id=30'
			}
		];

		return {
			getSourceOptions: function () {
				return sourcesOptions;
			},
			getUnselectedSources: function () {
				return DataStorageService.getUnselectedSources();
			},
			setUnselectedSources: function (sources) {
				DataStorageService.setUnselectedSources(sources);
			},
			getSelectedSources: function () {
				var unselectedSources = DataStorageService.getUnselectedSources(); 
				return sourcesOptions.map(function (item) {
					return item.name;
				}).filter(function (name) {
					return unselectedSources.indexOf(name) < 0;
				})
			}
		}
}]);