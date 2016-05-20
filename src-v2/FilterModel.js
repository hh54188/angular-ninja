angular.module('app')
.factory('FilterModel', 
	['FilterRepo', function(FilterRepo){

		var filerOptions = {
			filterSources: [
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
			],
			filterTimeRanges: [
				{
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
				},
				{
					interval: 24 * 365,
					desc: '所有'
				}				
			]
		}

		var filterSources = filerOptions.filterSources;
		var filterTimeRanges = filerOptions.filterTimeRanges;

		var filterSaves = FilterRepo.getRepo();
		var selectedSources = filterSaves.selectedSources;
		var selectedInterval = filterSaves.selectedInterval;

		filterSources.forEach(function (sourceOption) {
			selectedSources.forEach(function (selectedSourceName) {
				if (sourceOption.name === selectedSourceName) {
					sourceOption.checked = true;
				}
			})
		});

		filterTimeRanges.forEach(function (timeRange) {
			if (selectedInterval <= timeRange.interval) {
				timeRange.checked = true;
			}
		});

		return {
			getOptions: function () {
				return filerOptions;
			}
		}
}])