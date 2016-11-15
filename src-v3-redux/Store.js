var _listenerQueue = [];
var _currentState = null;

var Store = {
	dispatch: function (action) {
		
	},
	getState: function () {
		return _currentState;
	},
	subscribe: function (listener) {
		_listenerQueue.push(listener);
	}
}