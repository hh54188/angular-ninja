angular.module('app')
.factory('SubwaysRepo', 
	[function(){
		
		var selectedSubways = ['s1', 's4'];
		// var selectedSubways = [];

		var subways = [
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
			},
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
		];

		return {
			getSubways: function () {
				return subways;
			},
			getSelectedSubways: function () {
				return selectedSubways
			},
			addSelectedSubway: function (subwayVal) {
				if (selectedSubways.indexOf(subwayVal) < 0) {
					selectedSubways.push(subwayVal);
				}
				return selectedSubways;
			},
			clearSelectedSubways: function () {
				return (selectedSubways = []);
			},
			removeSubway: function (val) {
				var index = selectedSubways.indexOf(val);
				if (index > -1) {
					selectedSubways.splice(index, 1);
				}
			}
		}
}])