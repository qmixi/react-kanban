import React, { Component, PropTypes } from 'react'
import CardHeader from './CardHeader'
import { DragSource, DropTarget } from 'react-dnd'

const cardDragSpec = {
	beginDrag(props) {
		// console.log("props in card", props, "props.id", props.id);
		return {
			id: props.id
		};
	}
}

const cardDropSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem();
		props.cardCallbacks.updatePosition(draggedId, props.id);
	}
}

let collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource()
	};
}

let collectDrop = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class Card extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			collapsed: false
		}
	}

	render() {
		const { connectDragSource, connectDropTarget } = this.props;

		let toggleCollapse = () => {
			this.setState({
				collapsed: !this.state.collapsed
			});
		};

		return connectDropTarget(connectDragSource(
			<div className={this.state.collapsed ? 'card card--collapsed' : 'card'}>
				<CardHeader title={this.props.title} toggleCollapse={toggleCollapse} collapsed={this.state.collapsed}/>
				<div className="card__description">{this.props.description}</div>
				<div className="card__remove" onClick={() => { this.props.removeTask(this.props.id) }}>
					<i className="glyphicon glyphicon-trash"></i>
				</div>
			</div>
		));
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

const dragHighOrderCard = DragSource('card', cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget('card', cardDropSpec, collectDrop)(dragHighOrderCard);

export default dragDropHighOrderCard
