import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
const STATS_QUERY = gql`
  query StatsQuery($accountId: String) {
    Stats(accountId: $accountId) {
      accountId
      epicName
      seasonWindow
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
          style={{ marginTop: '150px', marginLeft: '50px' }}
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
              let accountId = data.Player.uid;

              console.log(data);

              return (
                <Fragment>
                  <h3>{uid}</h3>
                  <h3>username: {username}</h3>

                  <Query query={STATS_QUERY} variables={{ accountId }}>
                    {({ loading, error, data }) => {
                      if (loading)
                        return (
                          <div class='loading'>
                            <Spinner animation='border' variant='light' />
                          </div>
                        );

                      if (error) return console.log(error);

                      const { accountId, epicName, seasonWindow } = data.Stats;
                      console.log(data);

                      return (
                        <Fragment>
                          <h3>uid: {accountId}</h3>
                          <h3>username: {epicName}</h3>
                          <h3>SeasonWindow: {seasonWindow}</h3>
                        </Fragment>
                      );
                    }}
                  </Query>
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
