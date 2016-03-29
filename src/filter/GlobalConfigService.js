angular.module('app').factory('GlobalConfigService', function(){
	
	var filterSources = [
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
		// {
		// 	name: 'AC商城',
		// 	url: 'https://mall.actoys.net/index.php?app=search&cate_id=30'
		// }
	];

	var filterTimeInterval = [{
		interval: 24 * 365,
		desc: '所有'
	}, {
		interval: 1,
		desc: '一小时内'
	}, {
		interval: 3,
		desc: '三小时内'
	}, {
		interval: 24,
		desc: '一天内'
	}, {
		interval: 24 * 7,
		desc: '一周内'
	}];

	return {
		getSourcesConfig: function () {
			return filterSources;
		},
		getIntervalsConfig: function () {
			return filterTimeInterval;
		}
	}
});