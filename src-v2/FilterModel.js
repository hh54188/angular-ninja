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
			],
			filterKeywords: []
		}

		var filterSources = filerOptions.filterSources;
		var filterTimeRanges = filerOptions.filterTimeRanges;

		var filterSaves = FilterRepo.getRepo();
		var unselectedSources = filterSaves.unselectedSources;
		var selectedInterval = filterSaves.selectedInterval;
		var keywords = filterSaves.keywords;

		filterSources.forEach(function (sourceOption) {
			sourceOption.checked = true;
			unselectedSources.forEach(function (selectedSourceName) {
				if (sourceOption.name === selectedSourceName) {
					sourceOption.checked = false;
				}
			})
		});

		for (var i = 0; i < filterTimeRanges.length; i++) {
			var timeRange = filterTimeRanges[i];
			if (selectedInterval <= timeRange.interval) {
				timeRange.checked = true;
				break;
			}
		}

		filerOptions.filterKeywords = keywords;

		return {
			getOptions: function () {
				return filerOptions;
			}
		}
}])