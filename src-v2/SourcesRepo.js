angular.module('app')
.factory('SourcesRepo', 
	[function(){

		var sources = [
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

		var unselectedSources = ['ebay'];

		return {
			getPlainSources: function () {
				return sources;
			},
			getUnselectedSources: function () {
				return unselectedSources;
			},
			setUnselectedSources: function (unselectedSources) {
				return true;
			}
		}
}]);