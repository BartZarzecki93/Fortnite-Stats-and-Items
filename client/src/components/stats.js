import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

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
      data {
        keyboardmouse {
          comp {
            solo {
              placetop1
              placetop10
            }
          }
        }
      }
    }
  }
`;

export class stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#f4f4f4',
          foreColor: '#333'
        },
        xaxis: {
          categories: ['PalceTop1', 'PlaceTop10']
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ['#f44336']
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Largest Cities by Population',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '25px'
          }
        }
      },
      series: [
        {
          name: 'Population',
          data: ['', 10]
        }
      ]
    };
  }

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
                      const {
                        placetop1,
                        placetop10
                      } = data.Stats.data.keyboardmouse.comp.solo;
                      console.log(placetop1);

                      return (
                        <Fragment>
                          <h3>uid: {accountId}</h3>
                          <h3>username: {epicName}</h3>
                          <h3>SeasonWindow: {seasonWindow}</h3>
                          <h3>
                            Palcetop1:
                            <span value={this.state.series.data}>
                              {placetop1},{placetop10}
                            </span>
                            {placetop1}
                          </h3>
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
                  <React.Fragment>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type='bar'
                      height='250'
                      width='70%'
                    />
                    <button onClick={this.onClick}>Change The Look</button>
                  </React.Fragment>
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
