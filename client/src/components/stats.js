import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const PLAYER_QUERY = gql`
  query PlayerQuery($username: String) {
    Player(username: $username) {
      uid
      username
    }
  }
`;

export class stats extends Component {
  render() {
    let { username } = this.props.match.params;
    return (
      <Fragment>
        <div
          className='container'
          style={{ marginTop: '250px', marginLeft: '50px' }}
        >
          <h3>Hello</h3>

          <Query query={PLAYER_QUERY} variables={{ username }}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <div class='loading'>
                    <Spinner animation='border' variant='light' />
                  </div>
                );
              if (error) return console.log(error);

              const { uid, username } = data.Player;
              console.log(data);
              return (
                <Fragment>
                  <h3>uid: {uid}</h3>
                  <h3>username: {username}</h3>
                  <Link
                    to={`/stats/`}
                    className='btn btn-primary mx-auto d-block'
                  >
                    Back
                  </Link>
                </Fragment>
              );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}

export default stats;
