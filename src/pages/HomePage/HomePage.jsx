import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div id='homepage'>
        <Link to='/index' className='directory'>
          <div>
            <div className='img'>
              <img src='../../../images/cars.jpg' alt='Cars (Photographer: Jamie Street)' />
            </div>
            <h3>Cars</h3>
          </div>
        </Link>
        <div className='directory'>
          <div className='img'>
            <img src='../../../images/customers.jpg' alt='Customers (Photographer: Jennifer Marquez)' />
          </div>
          <h3>Customers</h3>
        </div>
        <div className='directory'>
          <div className='img'>
            <img src='../../../images/maitenance.jpg' alt='Maintenance (Photographer: NeonBrand)' />
          </div>
          <h3>Maintenance</h3>
        </div>
      </div>
    )
  }
}

export default HomePage;