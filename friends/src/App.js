import React, { Component } from 'react';

import InputForm from './components/InputForm/InputForm';
import FriendsList from './components/FriendsList/FriendsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Manage Friends List</h1>
        <InputForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
