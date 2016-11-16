function rootReducer(state, action) {

	var reduceOrder = ['keywords', 'sources', 'subways', 'times', 'pagination', 'data'];
	var reducers = [keywordReducer, sourceReducer, subwayReducer, timeReducer, paginationReducer];

	return Immutable.fromJS({
		keywords: keywordReducer(state.get('keywords'), action),
		sources: sourceReducer(state.get('sources'), action),
		subways: subwayReducer(state.get('subways'), action),
		times: timeReducer(state.get('times'), action),
		pagination: paginationReducer(state.get('pagination'), action)
	});
}