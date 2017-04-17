import React, {Component} from 'react'
import {connect} from 'react-redux'
import KanbanBoard from '../components/KanbanBoard'
import KanbanHeader from '../components/KanbanHeader'
import NewCardForm from '../components/NewCardForm'

const mapStateToProps = state => ({
	cards: state.tasks
});

const mapDispatchToProps = dispatch => ({
	addTask: (payload) => {
		dispatch({
			type: 'ADD_TASK',
			title: payload.title,
			description: payload.description,
			status: payload.status
		})
	}
});

class KanbanAppContainer extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			isNewCardOpen: false,
			newTaskStatus: "",
		}
	}

	render() {
		let setNewTask = status => {
			this.setState(state => {
				let newState = this.state;
				newState.newTaskStatus = status;
				newState.isNewCardOpen = true;
				return newState;
			});
		};

		let closeNewTaskModal = () => {
			this.setState(state => {
				let newState = this.state;
				newState.newTaskStatus = "";
				newState.isNewCardOpen = false;
				return newState;
			});
		}

		return (
			<div>
				<KanbanHeader/>
				<KanbanBoard cards={this.props.cards} setNewTask={setNewTask}></KanbanBoard>
				{ this.state.isNewCardOpen &&
				<NewCardForm status={this.state.newTaskStatus} closeNewTaskModal={closeNewTaskModal} addTask={this.props.addTask}/> }
			</div>
		)
	}
}

KanbanAppContainer = connect(mapStateToProps, mapDispatchToProps)(KanbanAppContainer);

export default KanbanAppContainer;
