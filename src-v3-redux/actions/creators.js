// 这里仍然有多个问题需要解决：
// 1. 如果用户在上一个请求还没有完成的情况下就发出下一个请求怎么办？
// 2. 这样把dispatch传入真的是一个好的实践吗？
function requestData(parameters) {
	return function (dispatch) {
		dispatch(changeAppState('app-state-loading'));
		$.ajax({
			url: 'http://example.com/',
			dataType: 'json',
			timeout: 1000 * 1,
			data: parameters,
			success: function (data, textStatus, jqXHR) {
				dispatch(receiveData({
					data: data,
					error: ''
				}))
				dispatch(changeAppState('app-state-normal'));
			},
			error: function (jqXHR, textStatus, errorThrown) {
				dispatch(receiveData({
					data: [],
					error: textStatus
				}));
				dispatch(changeAppState('app-state-error'));
			},
			complete: function (jqXHR, textStatus) {}
		});
	}
}

function receiveData(result) {
	return {
		type: DATA.RECEIVE_DATA,
		payload: result // {data: [], error: ''}
	}
}

function addKeyword(word) {
	return {
		type: KEYWORD.ADD_KEYWORD,
		payload: word
	}
}

function deleteKeyword(word) {
	return {
		type: KEYWORD.DELETE_KEYWORD,
		payload: word
	}
}

function sortKeyword(indexInfo) {
	return {
		type: KEYWORD.SORT_KEYWORD,
		payload: indexInfo 
		// {oldIndex, newIndex}
	}
}

function emptyKeywords() {
	return {
		type: KEYWORD.EMPTY_KEYWORDS
	}
}

function toggleSource(sourceId) {
	return {
		type: SOURCE.TOGGLE_SOURCE,
		payload: sourceId
	}
}

function toggleSubway(subwayId) {
	return {
		type: SUBWAY.TOGGLE_SUBWAY,
		payload: subwayId
	}
}

function deselectSubways() {
	return {
		type: SUBWAY.DESELECT_SUBWAYS
	}
}

function chooseTime(timeId) {
	return {
		type: TIME.CHOOSE_TIME,
		payload: timeId
	}
}

function turnToPage(pageNum) {
	return {
		type: PAGINATION.TURN_TO_PAGE,
		payload: pageNum
	}
}

function changeAppState(newState) {
	return {
		type: APP_STATE.CHANGE_TO,
		payload: newState
	}
}