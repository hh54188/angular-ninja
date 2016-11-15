var _listenerQueue = [];
var _currentState = Immutable.Map({});

function publish() {
	_listenerQueue.forEach(function (listener) {
		listener(_currentState);
	});
}

var Store = {
	dispatch: function (action) {
		rootReducer(_currentState, action);
	},
	getState: function () {
		return _currentState;
	},
	subscribe: function (listener) {
		_listenerQueue.push(listener);
	}
}