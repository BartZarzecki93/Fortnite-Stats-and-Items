import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

export default class navbar extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
        <img
          class='navbar-brand'
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
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='true'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' />
        </button>

        <div class='collapse navbar-collapse' id='navbarColor01'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='/home'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='http://localhost:3000/outfits'>
                Outfits
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='http://localhost:3000/upcoming-items'>
                Upcoming Items
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='http://localhost:3000/stats'>
                Stats
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
