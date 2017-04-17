import React, {Component, PropTypes} from 'react'

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
		let titleInput,
			descriptionInput;

		let canAddTask = () => {
			return descriptionInput.value.length > 0 ? true : false;
		};

		return (
			<div className="new-card">
				<div className="new-card__content">
					<div className="new-card__remove" onClick={() => {
						this.props.closeNewTaskModal()
					}}>+
					</div>
					<div className="new-card__title">Nowe zadanie</div>
					<div className="new-card__form">
						<div className="new-card__item">
							<input type="text" ref={node => titleInput = node} placeholder="tytuł"/>
						</div>
						<div className="new-card__item">
							<input type="text" ref={node => descriptionInput = node} placeholder="opis"/>
						</div>
					</div>
					<div className="new-card__submit-row">
					<span className="new-card__button" onClick={() => {
						if (canAddTask()) {
							this.props.closeNewTaskModal();
							this.props.addTask({
								title: titleInput.value,
								description: descriptionInput.value,
								status: this.state.status
							})
						}
					}}>dodaj zadanie</span>
					</div>
				</div>
			</div>
		);
	}
}

export default NewCardForm