import React, { Component } from 'react';
import './App.css';
import KanbanAppContainer from './containers/KanbanAppContainer';

class App extends Component {
  render() {
    return (
        <div>
            <KanbanAppContainer />
        </div>
    );
  }
}

export default App;
