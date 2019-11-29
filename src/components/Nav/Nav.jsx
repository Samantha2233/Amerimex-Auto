import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className='nav' >
        <div className='logo-and-links'>
          <a href='#landing'>
            <img className='logo' src='../../../images/amerimex-logo.png' alt='logo' />
          </a>
          <ul>
            <li>Add Car</li>
            <li>Add Agreement</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;