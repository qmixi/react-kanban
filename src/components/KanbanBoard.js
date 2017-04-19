import React, { Component, PropTypes } from 'react'
import KanbanProcess from './KanbanProcess'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class KanbanBoard extends Component {
  constructor() {
    super(...arguments);

  }

  render() {
    return (
      <div className="board clearfix">
        <KanbanProcess
          title={"Do zrobienia"}
          cards={ this.props.cards.filter(card => card.status === "to-do" ) }
          status={"to-do"}
          setNewTask={ this.props.setNewTask }
          removeTask={ this.props.removeTask }
          cardCallbacks={this.props.cardCallbacks}
        />
        <KanbanProcess
          title={"Pracuje nad"}
          cards={ this.props.cards.filter(card => card.status === "in-progress" ) }
          status={"in-progress"}
          setNewTask={ this.props.setNewTask }
          removeTask={ this.props.removeTask }
          cardCallbacks={this.props.cardCallbacks}
        />
        <KanbanProcess
          title={"Zrobione"}
          cards={ this.props.cards.filter(card => card.status === "done" ) }
          status={"done"}
          setNewTask={ this.props.setNewTask }
          removeTask={ this.props.removeTask }
          cardCallbacks={this.props.cardCallbacks}
        />
      </div>
    )
  }
}

KanbanBoard.PropTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DragDropContext(HTML5Backend)(KanbanBoard);
