import React, { Component, PropTypes } from 'react';
import Card from './Card'

class KanbanProcess extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let cards = this.props.cards.map(card => (
      <Card
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        tasks={card.tasks}
      />
    ));

    return (
      <div className="process">
        <div className="process__col">
          <div className="process__title">{this.props.title}</div>
          <div className="process__list">
            {cards}
          </div>
        </div>
        <div className="process__add-box">
          <div className="process__add">+</div>
        </div>
      </div>
    )
  }
}

export default KanbanProcess
