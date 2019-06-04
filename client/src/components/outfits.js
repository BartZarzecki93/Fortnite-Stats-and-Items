import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OutfitItem from './outfitItem';
import './outfititem.css';
import Spinner from 'react-bootstrap/Spinner';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
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
                  <ButtonToolbar>
                    {['Primary'].map(variant => (
                      <DropdownButton
                        title={variant}
                        variant={variant.toLowerCase()}
                        id={`dropdown-variants-${variant}`}
                        key={variant}
                      >
                        <Dropdown.Item eventKey='1'>Outfit</Dropdown.Item>
                        <Dropdown.Item eventKey='2' onClick={this.handleClick}>
                          Pickaxe
                        </Dropdown.Item>
                        <Link eventKey='3' to={'/'}>
                          Bundle
                        </Link>
                      </DropdownButton>
                    ))}
                  </ButtonToolbar>
                  <br />
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
