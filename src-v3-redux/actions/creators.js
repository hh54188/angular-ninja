function dataLoadingBegin(dispatchFn) {
	return {
		type: DATA.LOADING_BEGIN,
		payload: dispatchFn
	}
}

function dataLoadingSuccess(data) {
	return {
		type: DATA.LOADING_SUCCESS,
		payload: data
	}
}

function dataLoadingFailed(errorMessage) {
	return {
		type: DATA.LOADING_FAILED,
		payload: errorMessage
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