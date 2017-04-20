import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import reducers from './reducers/main'
import KanbanAppContainer from './containers/KanbanAppContainer'

class App extends Component {
  render() {

    const persistedState = localStorage.getItem('KanbanState') ? JSON.parse(localStorage.getItem('KanbanState')) : {};
    const store = createStore(reducers, persistedState);
    store.subscribe(() => {
        localStorage.setItem('KanbanState', JSON.stringify(store.getState()));
    });

    return (
        <Provider store={store}>
          <KanbanAppContainer />
        </Provider>
    );
  }
}

export default App;
