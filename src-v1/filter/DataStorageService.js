angular.module('app').factory('DataStorageService', ['$rootScope', '$http',function($rootScope, $http){

	var data = [
		{
			source: 'ebay',
			title: 'HOT TOYS HOTTOYS 1/6 DX08 BATMAN JOKER JACK NICHOLSON PRE 1989 VERSION ES AQ1766',
			url: 'http://www.ebay.com/itm/HOT-TOYS-HOTTOYS-16-DX08-BATMAN-JOKER-JACK-NICHOLSON-PRE-1989-VERSION-ES-AQ1766-/371581317475',
			date: +new Date,
			price: ''
		},
		{
			source: 'ebay',
			title: 'SIDESHOW Six scale DC Comics Batman (Gotham Knight version) 1/6 action figure',
			url: 'http://www.ebay.com/itm/SIDESHOW-Six-scale-DC-Comics-Batman-Gotham-Knight-version-16-action-figure-/272182135118',
			date: +new Date,
			price: ''
		},
		{
			source: '贴吧',
			title: '【魔都交换】特种部队4人组交换蝙蝠大套或圣衣神话',
			url: 'http://tieba.baidu.com/p/4006126740',
			date: +new Date,
			price: ''
		},
		{
			source: '贴吧',
			title: '出全新ht擎天柱和雷电',
			url: 'http://tieba.baidu.com/p/4006765860',
			date: +new Date,
			price: ''
		},
		{
			source: '淘宝',
			title: 'Hottoys 1:6 MK36 Peacemaker 全新未拆',
			url: '//2.淘宝.com/item.htm?spm=2007.1000337.16.4.IjtmQj&id=43659751169',
			price: '2100.00',
			date: 1441157171835
		},		
		{
			source: '贴吧',
			title: '急用钱 挥泪洒血出售 全部秒价',
			url: 'http://tieba.baidu.com/p/4005502670',
			date: 1441157171835,
			price: ''
		},	
		{
			source: '淘宝',
			title: 'hottoys ht 钢铁侠 mk43 黑寡妇 雷神 2.0 剑皇 rah 绿巨人',
			url: '//2.淘宝.com/item.htm?id=521368700651',
			price: '7500.00',
			date: 1441157171835
		},	
		{
			source: '贴吧',
			title: '出有损42 妇联2美队 寡妇4.0',
			url: 'http://tieba.baidu.com/p/4005633219',
			date: 1441157171835,
			price: ''
		},
		{
			source: '淘宝',
			title: 'HotToys HT 钢铁侠MK38 伊果',
			url: '//2.淘宝.com/item.htm?id=5213288708871',
			price: '2080.00',
			date: 1441157171835
		},		
		{
			source: '贴吧',
			title: '【出售】全新未拆kingarts MK42 南京面交',
			url: 'http://tieba.baidu.com/p/3998832428',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '出VIP合金3，战争机器2.0,可走AC',
			url: 'http://tieba.baidu.com/p/4005955632',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '【出售】北京交换出售几乎全新刀锋男 （外地勿扰）',
			url: 'http://tieba.baidu.com/p/4003405674',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '【出售】全新8角尖尖雷电一盒 求购3A权利游戏小恶魔',
			url: 'http://tieba.baidu.com/p/3991004481',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '出售】正宗仅拆HT MK33 vip',
			url: 'http://tieba.baidu.com/p/4006995814',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '【出售】MK2 2.0、鞭子1.0、蝙蝠稻草人套装',
			url: 'http://tieba.baidu.com/p/4006156744',
			date: 1441157171835,
			price: ''
		},
		{
			source: '贴吧',
			title: '出售DX13全新配件',
			url: 'http://tieba.baidu.com/p/3992740820',
			date: 1441157171835,
			price: ''
		}
	];

	var keywords = ['这', '是', '测试'];

	var sourceStates = {
		'ebay': {
			checked: true
		},
		'贴吧': {
			checked: true
		},
		'淘宝': {
			checked: true
		}
	};

	var selectedInterval = 24 * 365;

	function filterChanged() {
		console.log('filterChanged');
		$rootScope.$broadcast('filterChanged', {
			filter: {
				keywords: keywords,
				sourceStates: sourceStates,
				selectedInterval: selectedInterval
			}
		});
	}

	function requestData() {
		$http.get('http://127.0.0.1/test', {
			params: {
				keywords: keywords.join('+')
			}
		}).then(function successCallback(response) {
			// debugger
		}, function errorCallback(response) {
			// debugger
		})
	}

	requestData();

	return {
		getAllData: function () {
			return data;
		},
		getFilterSources: function () {
			return sourceStates
		},
		setFilterSources: function (newSources) {
			filterChanged();
			return (sourceStates = newSources)
		},
		getFilterIntervals: function () {
			return selectedInterval;
		},
		setFilterIntervals: function (newSelectInterval) {
			filterChanged();
			return (selectedInterval = newSelectInterval);
		},
		getFilterKeywords: function () {
			return keywords;
		},
		insertKeyword: function (word, newIndex) {

			if (!word) {
				return keywords;
			}

			if (keywords.indexOf(word) > -1) {
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

			return keywords;
		},
		deleteKeyword: function (word) {
			var index = keywords.indexOf(word);
			if (index > -1) {
				keywords.splice(index, 1);
			}

			return keywords;
		},
		deleteAllKeywords: function () {
			return (keywords = []);
		}
	}
}])