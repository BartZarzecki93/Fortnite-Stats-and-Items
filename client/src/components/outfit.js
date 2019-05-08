import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const OUTFIT_QUERY = gql`
  query OutfitQuery($identifier: String) {
    Outfit(identifier: $identifier) {
      identifier
      name
      description
      type
      cost
      rarity
      images {
        transparent
      }
      ratings {
        avgStars
        totalPoints
      }
    }
  }
`;

export class outfit extends Component {
  render() {
    let { identifier } = this.props.match.params;

    return (
      <Fragment>
        <Query query={OUTFIT_QUERY} variables={{ identifier }}>
          {({ loading, error, data }) => {
            if (loading) return <h6>Loading....</h6>;
            if (error) console.log(error);

            const {
              identifier,
              name,
              description,
              type,
              cost,
              rarity,
              images: { transparent },
              ratings: { avgStars, totalPoints }
            } = data.Outfit;

            console.log(data);
            return (
              <div
                class='card mb-3'
                style={{
                  width: '50%',
                  height: '90%',
                  display: 'block',
                  alignItems: 'center'
                }}
              >
                <h3 class='card-header text-center '>{name}</h3>

                <img
                  class='mx-auto d-block'
                  style={{
                    width: 200
                  }}
                  src={transparent}
                  alt='IMG'
                />
                <div
                  class='card-body'
                  style={{
                    width: '100%'
                  }}
                >
                  <h5 class='card-title text-center'>{description}</h5>

                  <ul class='list-group list-group-flush'>
                    <li class='list-group-item text-center font-weight-bold'>
                      <span className='text-dark'>Basics</span>
                    </li>
                    <li class='list-group-item text-center'>Type: {type}</li>
                    <li class='list-group-item text-center'>Cost: {cost}</li>
                    <li class='list-group-item text-center'>
                      Rarity: {rarity}
                    </li>
                    <li class='list-group-item text-center font-weight-bold'>
                      <span className='text-dark'>Ratings</span>
                    </li>
                    <li class='list-group-item text-center'>
                      Average Stars: {avgStars}
                      <i class='fa fa-star' aria-hidden='true' />
                    </li>
                    <li class='list-group-item text-center'>
                      Total Points: {totalPoints}
                    </li>
                  </ul>
                  <br />
                  <Link
                    to={`/outfits`}
                    className='btn btn-secondary mx-auto d-block'
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default outfit;
