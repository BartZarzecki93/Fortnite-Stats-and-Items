import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import '../App.css';

export class home extends Component {
  render() {
    return (
      <Fragment>
        <div
          class='container'
          style={{
            marginTop: '350px',
            marginLeft: '100px'
          }}
        >
          <Link
            to={`/outfits`}
            className='btn btn-warning d-block'
            style={{ width: '250px' }}
          >
            Check All The Items
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default home;
