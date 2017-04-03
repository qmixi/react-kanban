import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import reducers from './reducers/main'
import KanbanAppContainer from './containers/KanbanAppContainer'

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
        <Provider store={store}>
          <KanbanAppContainer />
        </Provider>
    );
  }
}

export default App;
