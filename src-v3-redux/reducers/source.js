// var sources = Immutable.List.of(
// 	Immutable.Map({
// 		id: 'ebay',
// 		name: 'ebay',
// 		url: 'http://www.ebay.com',
// 		checked: true
// 	})
// );

function _toggleSource(sources, sourceId) {
	return sources.update(sources.findIndex(function (item) {
		return item.get('id') === sourceId;
	}), function (item) {
		return item.set('checked', !item.get('checked'));
	})
}

function sourceReducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_SOURCE':
			return _toggleSource(state, action.payload);
		default: 
			return state;
	}
}
