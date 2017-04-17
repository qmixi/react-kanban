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
				<div className="card__remove" onClick={() => { this.props.removeTask(this.props.id) }}>
					<i className="glyphicon glyphicon-trash"></i>
				</div>
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
