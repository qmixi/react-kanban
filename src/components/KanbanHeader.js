import React, { Component } from 'react'

class KanbanHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <a className="header__gh" href="http://www.github.com/qmixi" target="_blank">@qmixi</a>
                <div className="header__title">
                    Kanban React App { }
                    <span className="header__tx">created by</span> { }
                    <a href="https://piotrkumorek.herokuapp.com" target="_blank">Piotr Kumorek</a>
                </div>
            </div>
        )
    }
}

export default KanbanHeader