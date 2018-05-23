import React, { Component } from 'react';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Search it!!">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Search it!!</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
