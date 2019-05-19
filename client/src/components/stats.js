import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import '../App.css';

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
          text: 'Player Stats',
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
          data: [10, 20]
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
          <Query query={PLAYER_QUERY} variables={{ username }}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <div class='loading'>
                    <Spinner animation='border' variant='light' />
                  </div>
                );
              if (error)
                return (
                  <div>
                    <h3>Player use diffrent platform</h3>
                  </div>
                );

              const { uid, username } = data.Player;
              let accountId = data.Player.uid;

              console.log(data);

              return (
                <Fragment>
                  <Query query={STATS_QUERY} variables={{ accountId }}>
                    {({ loading, error, data }) => {
                      if (loading)
                        return (
                          <div class='loading'>
                            <Spinner animation='border' variant='light' />
                          </div>
                        );

                      if (error)
                        return (
                          <div>
                            <h3>Player use diffrent platform</h3>
                          </div>
                        );

                      const { epicName } = data.Stats;
                      console.log(data);

                      const {
                        placetop1,
                        placetop10
                      } = data.Stats.data.keyboardmouse.comp.solo;
                      console.log(placetop1);
                      console.log(this.state.series);
                      var series1 = [
                        { name: 'Player', data: [placetop1, placetop10] }
                      ];
                      console.log(series1);
                      return (
                        <Fragment>
                          <div
                            class='card mb-3'
                            style={{
                              width: '80%',
                              height: '70%',
                              display: 'block',
                              alignItems: 'center'
                            }}
                          >
                            <h3 class='card-header text-center '>{epicName}</h3>
                            <br />

                            <div class='card-body'>
                              <h5 class='card-title text-center'>
                                Description
                              </h5>

                              <ul class='list-group list-group-flush'>
                                <li class='list-group-item text-center'>
                                  Top 1: {placetop1}
                                </li>
                                <li class='list-group-item text-center'>
                                  Top 10: {placetop10}
                                </li>
                              </ul>
                              <br />
                              <React.Fragment>
                                <Chart
                                  options={this.state.options}
                                  series={series1}
                                  type='bar'
                                  height='250'
                                  width='70%'
                                />
                              </React.Fragment>
                              <Link
                                to={`/stats/`}
                                className='btn btn-primary mx-auto d-block'
                              >
                                Back
                              </Link>
                            </div>
                          </div>
                        </Fragment>
                      );
                    }}
                  </Query>
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
