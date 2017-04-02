import React, { Component } from 'react'
import KanbanBoard from '../components/KanbanBoard'
import KanbanHeader from '../components/KanbanHeader'

class KanbanAppContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      cardList: [
        {
          id: 1,
          title: "Cook a dinner",
          description: "It's friday so I have to make a pizza",
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
          description: "Rocky needs a long walk",
          status: "to-do",
          tasks: []
        },
        {
          id: 3,
          title: "Create a Kanban-app",
          description: "Develop a Kanban app using React.js",
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
      <div>
        <KanbanHeader/>
        <KanbanBoard cards={this.state.cardList}></KanbanBoard>
      </div>
    )
  }
}

export default  KanbanAppContainer;
