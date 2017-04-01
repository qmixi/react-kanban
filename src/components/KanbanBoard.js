import React, { Component, PropTypes } from 'react'
import KanbanProcess from './KanbanProcess'

class KanbanBoard extends Component {
  constructor() {
    super(...arguments);

  }

  render() {
    return (
      <div className="board">
        <KanbanProcess
          title={"Do zrobienia"}
          cards={ this.props.cards.filter(card => card.status === "to-do" ) }
        />
        <KanbanProcess
          title={"Pracuje nad"}
          cards={ this.props.cards.filter(card => card.status === "in-progress" ) }
        />
        <KanbanProcess
          title={"Zrobione"}
          cards={ this.props.cards.filter(card => card.status === "done" ) }
        />
      </div>
    )
  }
}

export default KanbanBoard;
