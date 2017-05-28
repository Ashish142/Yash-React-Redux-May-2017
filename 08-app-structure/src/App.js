import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import Spinner from './Spinner/Spinner';
import store from './store.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bug Tracker</h2>
        </div>
        <div className="App-intro">
          <Provider store={store}>
            <Spinner></Spinner>
          </Provider>
        </div>
      </div>
    );
  }
}

//export  App;
