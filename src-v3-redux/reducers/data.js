// 这里仍然有多个问题需要解决：
// 1. 如果用户在上一个请求还没有完成的情况下就发出下一个请求怎么办？
// 2. 这样把dispatch传入真的是一个好的实践吗？
function _dataLoadingBegin(allStates, dispatchFn) {
	var loadSuccessed = true;
	var data = Immutable.fromJS([]);
	var errorMessage = '';

	setTimeout(function () {
		if (loadSuccessed) {
			dispatchFn(dataLoadingSuccess(data));
		} else {
			dispatchFn(dataLoadingFailed(errorMessage));
		}
	}, 1000 * 1);
	
	return allStates.set('appState', 'APP_STATE_DATA_LOADING_SUCCESS');
}

function _dataLoadingSuccess(allStates, data) {
	return allStates
			.set('data', data)
			.set('appState', 'APP_STATE_DATA_LOADING_SUCCESS');
}

function _dataLoadingFailed(allStates) {
	return allStates
			.set('data', allStates.get('data'))
			.set('appState', 'APP_STATE_DATA_LOADING_FAILED');
}

function dataReducer(state, action) {
	var payload = action.payload;
	switch (action.type) {
		// case 'LOADING_BEGIN':
		// 	return _dataLoadingBegin(state, payload);
		// case 'LOADING_SUCCESS':
		// 	return _dataLoadingSuccess(state, payload);
		// case 'LOADING_FAILED':
		// 	return _dataLoadingFailed(state, payload);
		default:
			return state;
	}
}