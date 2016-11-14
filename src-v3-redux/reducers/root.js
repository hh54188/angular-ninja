function rootReducer(state, action) {
	switch (action.type) {
		case 'ADD_KEYWORD': keywordReducer(state, action);
		case 'DELETE_KEYWORD': keywordReducer(state, action);
		case 'SORT_KEYWORD': keywordReducer(state, action);
		case 'EMPTY_KEYWORDS': keywordReducer(state, action);
		default: '';
	}
}