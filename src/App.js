import React, { Component } from 'react';

import carService from './utils/carService';

import HomePage from './pages/HomePage/HomePage';
import Tables from './pages/Tables/Tables';

import Nav from './components/Nav/Nav';
import CarForm from './components/CarForm/CarForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }
  }

  async componentDidMount() {
    const cars = await carService.index();
    this.setState({ cars });
  }

  handleCarSubmission = async newCarData => {
    const newCar = await carService.create(newCarData);
    console.log('newCar from handleCarSubmission in App', newCar);
    this.setState(state => ({
      cars: [...state.cars, newCar]
    }));
  }


  render() {
    return (
      <div className="App" >
        <Nav />
        <HomePage />
        <CarForm
          handleCarSubmission={this.handleCarSubmission}
        />
        <Tables
          cars={this.state.cars}
        />
      </div>
    );
  }
}

export default App;
