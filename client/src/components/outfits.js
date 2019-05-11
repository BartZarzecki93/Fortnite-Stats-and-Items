import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OutfitItem from './outfitItem';
import './outfititem.css';
import Spinner from 'react-bootstrap/Spinner';
import vbuck from '../vbuck.png';

const OUTFITS_QUERY = gql`
  query OutfitsQuery {
    Outfits {
      identifier
      name
      description
      type
      cost
      rarity
      images {
        transparent
      }
    }
  }
`;

export class outfits extends Component {
  render() {
    return (
      <Fragment>
        <div
          class='scrollContainer'
          style={{ marginTop: '85px', marginLeft: '50px' }}
        >
          <Query query={OUTFITS_QUERY}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <div class='loading'>
                    <Spinner animation='border' variant='light' />
                  </div>
                );
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
        </div>
      </Fragment>
    );
  }
}

export default outfits;
