function rootReducer(state, action) {
	return Immutable.fromJS({
		keywords: keywordReducer(state.get('keywords'), action),
		sources: sourceReducer(state.get('sources'), action),
		subways: subwayReducer(state.get('subways'), action),
		times: timeReducer(state.get('times'), action)
	})
}