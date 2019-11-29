import React, { Component } from 'react';

import HomePage from './pages/HomePage/HomePage';
import Tables from './pages/Tables/Tables';

import Nav from './components/Nav/Nav';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
    }
  }

  toggleNavItem = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }


  render() {
    return (
      <div className="App" >
        <Nav
          dropdownOpen={this.state.dropdownOpen}
          toggleNavItem={this.toggleNavItem}
        />
        <HomePage />
        <Tables />
      </div>
    );
  }
}

export default App;
