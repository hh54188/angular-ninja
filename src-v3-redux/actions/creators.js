function requestData(parameters) {
	return function (dispatch) {
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
			},
			error: function (jqXHR, textStatus, errorThrown) {
				dispatch(receiveData({
					data: [],
					error: textStatus
				}));
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