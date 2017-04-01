import React, { Component, PropTypes } from 'react';
import KanbanBoard from '../components/KanbanBoard'

class KanbanAppContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      cardList: [
        {
          id: 1,
          title: "Make a dinner",
          description: "It's friday so I have to cook pizza",
          status: "to-do",
          tasks: [
            {
              id: 1,
              name: "buy a required ingredients",
              done: false,
            }
          ]
        },
        {
          id: 2,
          title: "Go out with Rocky",
          description: "Rocky need a long walk",
          status: "to-do",
          tasks: []
        },
        {
          id: 3,
          title: "Create a Kanban-app",
          description: "Develop a Kanpan app using React.js",
          status: "in-progress",
          tasks: [
            {
              id: 1,
              name: "create main components",
              done: true,
            },
            {
              id: 2,
              name: "improve data-flow by using Redux",
              done: false,
            }
          ]
        },
        {
          id: 3,
          title: "Start learning React and Redux",
          description: "Need to read books and implement some basic examples",
          status: "done",
          tasks: []
        },
      ]
    };
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cardList}></KanbanBoard>
    )
  }
}

export default  KanbanAppContainer;
