import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OutfitItem from './outfitItem';

const OUTFITS_QUERY = gql`
  query OutfitsQuery {
    Outfits {
      identifier
      name
      description
      type
      cost
      rarity
    }
  }
`;

export class outfits extends Component {
  render() {
    return (
      <Fragment>
        <h1 class='display-4 my-3' />

        <Query query={OUTFITS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h6>Loading...</h6>;
            if (error) return console.log(error);
            return (
              <Fragment>
                {data.Outfits.map(Outfit => (
                  <OutfitItem key={Outfit.name} Outfit={Outfit} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default outfits;
