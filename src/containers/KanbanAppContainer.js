import React, { Component } from 'react'
import { connect } from 'react-redux'
import KanbanBoard from '../components/KanbanBoard'
import KanbanHeader from '../components/KanbanHeader'

const mapStateToProps = state => ({
    cards: state.tasks
});

const mapDispatchToProps = dispatch => ({
    addTodo: (id, title, description, status) => dispatch({
	    type: 'ADD_TASK',
	    title: title,
	    description: description,
	    status: status

    })
});

class KanbanAppContainer extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div>
        <KanbanHeader/>
        <KanbanBoard cards={this.props.cards}></KanbanBoard>
      </div>
    )
  }
}

KanbanAppContainer = connect(mapStateToProps, mapDispatchToProps)(KanbanAppContainer);

export default KanbanAppContainer;
