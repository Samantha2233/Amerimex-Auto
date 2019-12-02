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
      cars: [],
      searchField: '',
      carFormIsOpen: false
    }
  }


  // MODAL TOGGLER FUNCTIONS
  toggleCarForm = () => {
    this.setState({
      carFormIsOpen: !this.state.carFormIsOpen
    });
  }



  //  CAR FUNCTIONS
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

  handleUpdateCar = async updatedCarData => {
    const updatedCar = await carService.update(updatedCarData);
    const newCarsArray = this.state.cars.map(car =>
      car._id === updatedCar._id ? updatedCar : car
    );
    this.setState(
      { cars: newCarsArray }
      // push history to /?
    )
  }




  // SEACRH FUNCTION
  handleSearch = e => {
    this.setState({ searchField: e.target.value })
  }



  render() {
    const { cars, searchField } = this.state;
    const filteredCars = cars.filter(car =>
      car.purchaseDescription.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App" >
        <Nav
          carFormIsOpen={this.state.carFormIsOpen}
          toggleCarForm={this.toggleCarForm}
        />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/index' render={(props) =>
            <IndexPage
              cars={filteredCars}
              toggleCarForm={this.toggleCarForm}
              searchField={this.state.searchField}
              handleSearch={this.handleSearch}
            />} />
          <Route path='/index/:carId' component={DetailPage} />
        </Switch>
        <CarForm
          carFormIsOpen={this.state.carFormIsOpen}
          toggleCarForm={this.toggleCarForm}
          handleCarSubmission={this.handleCarSubmission}
        />
        <DetailPage />
      </div>
    );
  }
}

export default App;
