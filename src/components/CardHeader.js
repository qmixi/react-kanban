import React, { Component, PropTypes } from 'react'

class CardHeader extends Component {
	constructor() {
		super(...arguments);
	}

	render() {

		return(
			<div className="card__header" onClick={() => {this.props.toggleCollapse()}}>
				<div className="card__collapse">
					<i className={this.props.collapsed ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'}></i>
				</div>
				<div className="card__title">{this.props.title}</div>
			</div>
		)
	}
}

CardHeader.propTypes = {
	title: PropTypes.string.isRequired,
	collpased: PropTypes.bool,
	toggleCollapse : PropTypes.func.isRequired
}

export default CardHeader