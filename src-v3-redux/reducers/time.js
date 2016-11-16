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
			item.set('checked', true);
		} else {
			item.set('checked', false);
		}
		return item;
	})
}

function timeReducer(state, action) {
	switch (action.type) {
		case 'CHOOSE_RANGE':
			return _chooseRange(state, action.payload);
		default: 
			return state;
	}
}
