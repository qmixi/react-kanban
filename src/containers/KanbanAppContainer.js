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
	},
	removeTask: (id) => dispatch({
		type: 'REMOVE_TASK',
		id: id
	}),
	changeStatus: (id, status) => {dispatch({
		type: 'CHANGE_STATUS',
		id: id,
		status: status
	})},

	updatePosition: (payload, afterId) => {dispatch({
		type: 'UPDATE_POSITION',
		id: payload.id,
		afterId: afterId
	})},
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
		};

		return (
			<div>
				<KanbanHeader/>
				<KanbanBoard cards={this.props.cards} removeTask={this.props.removeTask} setNewTask={setNewTask}
				             cardCallbacks={{
				                changeStatus: this.props.changeStatus,
				                updatePosition: this.props.updatePosition
				             }}></KanbanBoard>
				{ this.state.isNewCardOpen &&
				<NewCardForm status={this.state.newTaskStatus} closeNewTaskModal={closeNewTaskModal} addTask={this.props.addTask}/> }
			</div>
		)
	}
}

KanbanAppContainer = connect(mapStateToProps, mapDispatchToProps)(KanbanAppContainer);

export default KanbanAppContainer;
