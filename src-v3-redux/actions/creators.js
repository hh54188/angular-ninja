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