import React, { Component, PropTypes } from 'react'

class NewCardForm extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			title: "test",
			description: "test",
			status: "",
		}
	}

	componentDidMount() {
		this.setState((prevState, props) => {
			let newState = prevState;
			newState.status = props.status;
			return newState;
		});
	}

	render() {
		let handleChangeDescription = (event) => {
			this.setState(state => {
				let newState = state;
				newState.description = event.target.value;
				return newState;
			});
		}

		let handleChangeTitle = (event) => {
			this.setState(state => {
				let newState = state;
				newState.title= event.target.value;
				return newState;
			});
		}

		return (
			<div className="new-card">
				<div className="new-card__title">Nowe zadanie</div>
				<div className="new-card__form">
					<div className="new-card__item">
						<input type="text" value={this.state.title} onChange={handleChangeTitle} placeholder="tytuł"/>
					</div>
					<div className="new-card__item">
						<input type="text" value={this.state.description} onChange={handleChangeDescription} placeholder="opis"/>
					</div>
				</div>
				<div className="new-card__submit-row">
					<span className="new-card__button" onClick={() => {
						this.props.addTask({
							title: this.state.title,
							description: this.state.description,
							status: this.state.status
						})}}>dodaj zadanie</span>
				</div>
			</div>
		);
	}
}

export default NewCardForm