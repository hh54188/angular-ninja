function rootReducer(state, action) {



	var reduceArr = [
		{'keywords': keywordReducer},
		{'sources': sourceReducer},
		{'subways': subwayReducer},
		{'times': timeReducer},
		{'pagination': paginationReducer}
	];

	function stateReduce(reducers, initialState) {
		reducers.forEach(function (reducerItem) {
			for (var property in reducerItem) {
				var reducer = reducerItem[property];
				initialState = initialState.set(
					property, 
					reducer(initialState.get(property), action)
				);
			}
		});

		return initialState;
	}

	return stateReduce(reduceArr, state);

	// 方法一，最初方法
	// 缺陷：data需要依赖页面中其他的配置信息，data不能与其他的平级关系
	// return Immutable.fromJS({
	// 	keywords: keywordReducer(state.get('keywords'), action),
	// 	sources: sourceReducer(state.get('sources'), action),
	// 	subways: subwayReducer(state.get('subways'), action),
	// 	times: timeReducer(state.get('times'), action),
	// 	pagination: paginationReducer(state.get('pagination'), action)
	// });

	// 方法二，不够简洁
	// var reduceOrder = ['keywords', 'sources', 'subways', 'times', 'pagination'];
	// var reducers = [keywordReducer, sourceReducer, subwayReducer, timeReducer, paginationReducer];
	// for (var i = 0; i < reduceOrder.length; i++) {
	// 	var property = reduceOrder[i];
	// 	var reducer = reducers[i];
	// 	state = state.set(property, reducer(state.get(property), action));
	// }
	// return state;	
}