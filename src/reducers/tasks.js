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

const tasks = function(state = [
		{
			id: 1,
			title: "Cook a dinner",
			description: "It's friday so I have to make a pizza",
			status: "to-do",
			tasks: [
				{
					id: 1,
					name: "buy a required ingredients",
					done: false,
				}
			]
		},
		{
			id: 2,
			title: "Go out with Rocky",
			description: "Rocky needs a long walk",
			status: "to-do",
			tasks: []
		},
		{
			id: 3,
			title: "Create a Kanban-app",
			description: "Develop a Kanban app using React.js",
			status: "in-progress",
			tasks: [
				{
					id: 1,
					name: "create main components",
					done: true,
				},
				{
					id: 2,
					name: "improve data-flow by using Redux",
					done: false,
				}
			]
		},
		{
			id: 3,
			title: "Start learning React and Redux",
			description: "Need to read books and implement some basic examples",
			status: "done",
			tasks: []
		},
	], action) {
	switch(action.type) {
		case 'ADD_TASK':
			return [...state, task(state, action)];
		default:
			return [...state];
	}
};

export default tasks