const task = function(state, action) {
	switch(action.type) {
		case 'ADD_TASK':
			return {
				id: parseInt(Math.random() * 100000, 10),
				title: action.title,
				status: action.status,
				description: action.description,
				tasks: []
			};
		default:
			return state;
	}
}

const tasks = function(state = [], action) {
	switch(action.type) {
		case 'ADD_TASK':
			return [...state, task(state, action)];

		case 'REMOVE_TASK':
			let newState = state.filter(card => card.id != action.id);
			return newState;

		case 'CHANGE_STATUS':
			let index =  state.findIndex(card => card.id == action.id);
			let card = Object.assign({}, state[index]);
			card.status = action.status;
			let returnState = [...state];
			returnState.splice(index, 1 , card);
			return returnState;

		case 'UPDATE_POSITION':
			if(action.id != action.afterId) {
				let index = state.findIndex(card => card.id == action.id);
				let card = Object.assign({}, state[index]);
				let afterIndex = state.findIndex(card => card.id == action.afterId);
				let returnState = [...state];
				returnState.splice(index, 1);
				returnState.splice(afterIndex, 0, card);
				return returnState;
			}
			return [...state];
		default:
			return [...state];
	}
};

export default tasks