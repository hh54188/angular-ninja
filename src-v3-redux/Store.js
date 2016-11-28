var _listenerQueue = [];
var _currentState = null;
var _initialState = Immutable.fromJS({
	appState: 'app-state-normal',
	pagination: {
		total: 10,
		cur: 3
	},
	keywords: ['keyword01', 'keyword02', 'keyword03'],
	sources: [
		{
			id: 'ebay',
			name: 'ebay',
			url: 'http://www.ebay.com',
			checked: true
		},
		{
			id: 'taobao',
			name: 'taobao',
			url: 'http://www.taobao.com',
			checked: true
		},
		{
			id: 'tieba',
			name: '贴吧',
			url: 'http://tieba.baidu.com',
			checked: true
		}
	],
	subways: [
		{
			id: 's1',
			desc: '1号线',
			color: '#c23a30',
			checked: false
		},
		{
			id: 's2',
			desc: '2号线',
			color: '#006098',
			checked: false
		},
		{
			id: 's4',
			desc: '4号线',
			color: '#008e9c',
			checked: false
		},
		{
			id: 's5',
			desc: '5号线',
			color: '#a6217f',
			checked: false
		},
		{
			id: 's6',
			desc: '6号线',
			color: '#d29700',
			checked: false
		},
		{
			id: 's7',
			desc: '7号线',
			color: '#f6c582',
			checked: false
		},
		{
			id: 's8',
			desc: '8号线',
			color: '#009b6b',
			checked: false
		},
		{
			id: 's9',
			desc: '9号线',
			color: '#8fc31f',
			checked: false
		},
		{
			id: 's10',
			desc: '10号线',
			color: '#009bc0',
			checked: false
		},
		{
			id: 's13',
			desc: '13号线',
			color: '#f9e700',
			checked: false
		},
		{
			id: 's14',
			desc: '14号线',
			color: '#d5a7a1',
			checked: false
		},
		{
			id: 's15',
			desc: '15号线',
			color: '#5b2c68',
			checked: false
		},
		{
			id: 's_batong',
			desc: '八通线',
			color: '#c23a30',
			checked: false
		},
		{
			id: 's_fangshan',
			desc: '房山线',
			color: '#e46022',
			checked: false
		},
		{
			id: 's_changping',
			desc: '昌平线',
			color: '#de82b2',
			checked: false
		},
		{
			id: 's_yizhuang',
			desc: '亦庄线',
			color: '#e40077',
			checked: false
		},
		{
			id: 's_airport',
			desc: '机场线',
			color: '#a29bbb',
			checked: false
		}
	],
	times: [
		{
			id: 't_hour',
			value: 1,
			desc: '一小时内',
			checked: false,
		},
		{
			id: 't_day',
			value: 1 * 24,
			desc: '一天内',
			checked: false,
		},
		{
			id: 't_week',
			value: 1 * 24 * 7,
			desc: '一周内',
			checked: false,
		},
		{
			id: 't_all',
			value: 1 * 24 * 365,
			desc: '所有',
			checked: true,
		}
	],
	data: [
		{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
				{
			id: 784533,
			title: 'zhihu.com',
			url: 'http://zhihu.com'
		},
	]	
})

function publish(state) {
	_listenerQueue.forEach(function (listener) {
		listener(state);
	});
}

function isFunction(obj) {
	return Object.prototype.toString.call(obj) === '[object Function]'
			? true
			: false;
}

var Store = {
	dispatch: function (action) {
		_currentState = rootReducer(
			this.getState(),
			action
		);
		publish(_currentState);
	},
	getState: function () {
		return _currentState || _initialState;
	},
	subscribe: function (listener) {
		_listenerQueue.push(listener);
	}
}