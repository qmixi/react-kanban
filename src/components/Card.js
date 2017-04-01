import React, { Component, PropTypes } from 'react'

class Card extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <div className="card__description">{this.props.description}</div>
      </div>
    )
  }
}

export default Card
