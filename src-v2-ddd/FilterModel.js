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
			filterSubways: [
				{
					val: 's1',
					desc: '1号线',
					color: '#c23a30'
				},
				{
					val: 's2',
					desc: '2号线',
					color: '#006098'
				},
				{
					val: 's4',
					desc: '4号线',
					color: '#008e9c'
				},
				{
					val: 's5',
					desc: '5号线',
					color: '#a6217f'
				},
				{
					val: 's6',
					desc: '6号线',
					color: '#d29700'
				},
				{
					val: 's7',
					desc: '7号线',
					color: '#f6c582'
				},
				{
					val: 's8',
					desc: '8号线',
					color: '#009b6b'
				},
				{
					val: 's9',
					desc: '9号线',
					color: '#8fc31f'
				},
				{
					val: 's10',
					desc: '10号线',
					color: '#009bc0'
				},
				{
					val: 's13',
					desc: '13号线',
					color: '#f9e700'
				},
				{
					val: 's14',
					desc: '14号线',
					color: '#d5a7a1'
				},
				{
					val: 's15',
					desc: '15号线',
					color: '#5b2c68'
				},
				{
					val: 's_batong',
					desc: '八通线',
					color: '#c23a30'
				}，
				{
					val: 's_fangshan',
					desc: '房山线',
					color: '#e46022'
				},
				{
					val: 's_changping',
					desc: '昌平线',
					color: '#de82b2'
				},
				{
					val: 's_yizhuang',
					desc: '亦庄线',
					color: '#e40077'
				},
				{
					val: 's_airport',
					desc: '机场线',
					color: '#a29bbb'
				}
			]
		}

		var filterSources = filerOptions.filterSources;
		var filterTimeRanges = filerOptions.filterTimeRanges;
		var filterSubways = filerOptions.filterSubways;

		var filterSaves = FilterRepo.getRepo();
		var unselectedSources = filterSaves.unselectedSources;
		var selectedInterval = filterSaves.selectedInterval;
		var selectedSubways = filterSaves.selectedSubways

		debugger

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

		filterSubways.forEach(function (subway) {
			if (selectedSubways.indexOf(subway.val) > -1) {
				subway.checked = true;
			} else {
				subway.checked = false;
			}
		});


		return {
			getOptions: function () {
				return filerOptions;
			}
		}
}])