// var subways = [
// {
// 	id: 's1',
// 	desc: '1号线',
// 	color: '#c23a30',
// 	checked: true
// }]

function _unselectAllSubways(subways) {
	return subways.map(function (item) {
		return item.set('checked', false);
	});
}

function _toggleSubway(subways, subwayId) {
	return subways.update(subways.findIndex(function (item) {
		return item.get('id') === subwayId;
	}), function (item) {
		return item.set('checked', !item.get('checked'));
	})
}

function subwayReducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_SUBWAY':
			return _toggleSubway(state, action.payload);
		case 'UNSELECT_ALL_SUBWAYS':
			return _unselectAllSubways(state);
		default: 
			return state;
	}
}