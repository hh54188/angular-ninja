function rootReducer(state, action) {

	// 虽然Store存储的state里还有appState这个属性
	// 但是它没有自己的reducer，
	// 它的状态的改变是由 dataReducer修改的
	var reduceArr = [
		{'keywords': keywordReducer},
		{'sources': sourceReducer},
		{'subways': subwayReducer},
		{'times': timeReducer},
		{'pagination': paginationReducer},
		{'data': dataReducer}
	];

	// data字段的属性和其他的属性（如keywords、sources等）不同
	// 其他的属性状态是可以自治的，所以reducer传入的状态也是自己的
	// 但是data值是依赖其他值决定
	// 所以dataReducer必须放在最后，等待其他值都更新完毕之后
	// 再依据它们决定自己的值，所以dataReducer传入的是整个状态的值
	function stateReduce(reducers, initialState) {
		reducers.forEach(function (reducerItem, index) {
			for (var property in reducerItem) {
				var reducer = reducerItem[property];
				// if (index === reducers.length - 1) {
				// 	initialState = reducer(initialState, action)
				// } else {
					initialState = initialState.set(
						property, 
						reducer(
							initialState.get(property),
							action
						)
					);
				// }
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