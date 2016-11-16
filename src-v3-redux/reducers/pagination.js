function _turnToPage(pagination, pageNum) {
	return pagination.set('cur', pageNum);
}

function paginationReducer(state, action) {
	switch (action.type) {
		case 'TURN_TO_PAGE':
			return _turnToPage(state, action.payload);
		default:
			return state;
	}
}