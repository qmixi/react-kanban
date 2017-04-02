import React, { Component, PropTypes } from 'react'
import CardHeader from './CardHeader'

class Card extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			collapsed: false
		}
	}

	render() {
		let toggleCollapse = () => {
			this.setState({
				collapsed: !this.state.collapsed
			});
		};

		return (
			<div className={this.state.collapsed ? 'card card--collapsed' : 'card'}>
				<CardHeader title={this.props.title} toggleCollapse={toggleCollapse} collapsed={this.state.collapsed}/>
				<div className="card__description">{this.props.description}</div>
			</div>
		)
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Card
