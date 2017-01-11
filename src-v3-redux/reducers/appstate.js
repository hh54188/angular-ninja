function _changeState(lastState, newState) {
	return newState;
}

function appStateReducer(state, action) {
	var payload = action.payload;
	switch (action.type) {
		case 'CHANGE_TO':
			return _changeState(state, payload);
		default:
			return state;
	}
}