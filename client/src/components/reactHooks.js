import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_Items = gql`
  {
    Outfits {
      name
    }
  }
`;
const Outfits = () => {
  const { data, error, loading } = useQuery(GET_Items);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  console.log(data);
  console.log(data.name);

  return (
    <div>
      <ul style={{ marginTop: '85px', marginLeft: '70px' }}>
        {data.Outfits.map(outfit => (
          <li key={outfit.name}>{outfit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default class reactHooks extends Component {
  render() {
    return (
      <div>
        <Outfits />
      </div>
    );
  }
}
