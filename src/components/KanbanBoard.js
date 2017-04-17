import React, { Component, PropTypes } from 'react'
import KanbanProcess from './KanbanProcess'

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
        />
        <KanbanProcess
          title={"Pracuje nad"}
          cards={ this.props.cards.filter(card => card.status === "in-progress" ) }
          status={"in-progress"}
          setNewTask={ this.props.setNewTask }
          removeTask={ this.props.removeTask }
        />
        <KanbanProcess
          title={"Zrobione"}
          cards={ this.props.cards.filter(card => card.status === "done" ) }
          status={"done"}
          setNewTask={ this.props.setNewTask }
          removeTask={ this.props.removeTask }
        />
      </div>
    )
  }
}

KanbanBoard.PropTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default KanbanBoard;
