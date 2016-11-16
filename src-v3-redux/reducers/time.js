// var timeRanges = [
// 	{
// 		id: 't1'
// 		value: 1,
// 		desc: '一小时内',
// 		checked: false,
// 	}
// ];

function _chooseRange(ranges, rangeId) {
	return ranges.map(function (item) {
		if (item.get('id') === rangeId) {
			return item.set('checked', true);
		} else {
			return item.set('checked', false);
		}
	})
}

function timeReducer(state, action) {
	switch (action.type) {
		case 'CHOOSE_TIME':
			return _chooseRange(state, action.payload);
		default: 
			return state;
	}
}
