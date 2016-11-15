function rootReducer(state, action) {
	return {
		keywords: keywordReducer(state.keywords, action)
	}
}