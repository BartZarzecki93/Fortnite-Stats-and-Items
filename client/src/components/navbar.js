import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

export default class navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
        <img
          className='navbar-brand'
          alt='fortnite'
          href='http://localhost:3000/home'
          src={logo}
          style={{
            width: 60,
            display: 'block',
            marginLeft: ' 10px ',
            marginTop: '10px'
          }}
        />
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='true'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/home'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='http://localhost:3000/outfits'>
                Outfits
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='http://localhost:3000/upcoming-items'
              >
                Upcoming Items
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='http://localhost:3000/stats'>
                Stats
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='http://localhost:3000/reacthooks'>
                Hooks
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
