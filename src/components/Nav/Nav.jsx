import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className='nav' >
        <div className='logo-and-links'>
          <Link to='/'>
            <img className='logo' src='../../../images/amerimex-logo.png' alt='logo' />
          </Link>
          <ul>
            <li
              onClick={this.props.toggleCarForm}
              carFormIsOpen={this.props.carFormIsOpen}
            >Add Car</li>
            <li>Add Agreement</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;