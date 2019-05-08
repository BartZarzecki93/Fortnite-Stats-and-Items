import React from 'react';

import { Link } from 'react-router-dom';

export default function outfitItem({
  Outfit: {
    identifier,
    name,
    description,
    type,
    cost,
    rarity,
    images: { transparent }
  }
}) {
  return (
    <div
      class='card mb-3'
      style={{
        width: '40%',
        height: '100%',
        display: 'block',
        alignItems: 'center'
      }}
    >
      <h3 class='card-header text-center '>{name}</h3>
      <br />
      <img
        class='mx-auto d-block'
        style={{
          width: 180,
          height: 150
        }}
        src={transparent}
      />
      <div class='card-body'>
        <h5 class='card-title text-center'>{description}</h5>

        <ul class='list-group list-group-flush'>
          <li class='list-group-item text-center'>Type: {type}</li>
          <li class='list-group-item text-center'>Cost: {cost}</li>
          <li class='list-group-item text-center'>Rarity: {rarity}</li>
        </ul>
        <br />
        <Link
          to={`/outfit/${identifier}`}
          className='btn btn-primary mx-auto d-block'
        >
          Details
        </Link>
        <br />
      </div>
    </div>
  );
}
