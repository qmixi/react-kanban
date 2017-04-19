import React, {Component, PropTypes} from 'react';
import Card from './Card'
import { DropTarget } from 'react-dnd'

const listTargetSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem().id;
		props.cardCallbacks.changeStatus(draggedId, props.status)
	}
}

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class KanbanProcess extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { connectDropTarget } = this.props;

		let cards = this.props.cards.map(card => (
			<Card
				key={card.id}
				id={card.id}
				title={card.title}
				description={card.description}
				tasks={card.tasks}
				removeTask={ this.props.removeTask }
				cardCallbacks={this.props.cardCallbacks}
			/>
		));

		return connectDropTarget(
			<div className="col-md-4">
				<div className="process">
					<div className="process__col">
						<div className="process__title">{this.props.title}</div>
						<div className="process__list">
							{cards}
						</div>
					</div>
					{ cards.length < 1 && <div className="process__empty">
						<i className="glyphicon glyphicon-warning-sign"></i>
						<span className="process__empty-tx">Brak zadań w tym etapie</span>
					</div>
					}
					<div className="process__add-box">
						<div className="process__add" onClick={() => {
							this.props.setNewTask(this.props.status)
						}}>+
						</div>
					</div>
				</div>
			</div>
		)
	}
}

KanbanProcess.propTypes = {
	title: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DropTarget('card', listTargetSpec, collect)(KanbanProcess)
