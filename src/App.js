import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import carService from './utils/carService';

import HomePage from './pages/HomePage/HomePage';
import IndexPage from './pages/IndexPage/IndexPage';
import DetailPage from './pages/DetailPage/DetailPage';

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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/index' render={(props) => <IndexPage cars={this.state.cars} />} />
          <Route path='/index/:carId' component={DetailPage} />
        </Switch>
        <CarForm
          handleCarSubmission={this.handleCarSubmission}
        />
        <DetailPage />
      </div>
    );
  }
}

export default App;
