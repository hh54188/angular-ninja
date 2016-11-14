var Store = {
	dispatch: function (action) {
		var initialState = {};
		rootReducer(initialState, action);
	}
}