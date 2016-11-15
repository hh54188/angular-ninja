function _addKeyword(keywords, newKeyword) {
	return keywords.push(newKeyword);
}

function _deleteKeyword(keywords, keyword) {
	var index = keywords.indexOf(keyword);
	return keywords.delete(index);	
}

function _sortKeyword(keywords, oldIndex, newIndex) {
	var tempKeyword = keywords.get(oldIndex);
	return keywords.delete(oldIndex).insert(newIndex, tempKeyword);
}

function _empaytKeywords(keywords) {
	return keywords.clear();
}

function keywordReducer(state, action) {
	var payload = action.payload;
	
	switch (action.type) {
		case 'ADD_KEYWORD':
			return _addKeyword(state, payload);
		case 'DELETE_KEYWORD':
			return _deleteKeyword(state, payload);
		case 'SORT_KEYWORD':
			return _sortKeyword(state, payload.oldIndex, payload.newIndex);
		case 'EMPTY_KEYWORDS':
			return _empaytKeywords(state);
		default:
			return state;
	}
}