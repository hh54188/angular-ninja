function _receiveData(lastData, receivedResult) {
	var error = receivedResult.error;
	if (error) {
		return lastData;
	}

	return Immutable.fromJS(receivedResult.data);
}

function dataReducer(state, action) {
	var payload = action.payload;
	switch (action.type) {
		case 'RECEIVE_DATA':
			return _receiveData(state, payload);
		default:
			return state;
	}
}