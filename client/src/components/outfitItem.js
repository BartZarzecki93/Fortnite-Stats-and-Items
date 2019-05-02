import React from 'react';
import logo from '../logo.png';

export default function outfitItem({
  Outfit: { identifier, name, description, type, cost, rarity }
}) {
  return (
    <div
      class='card mb-3'
      style={{
        width: 350,
        height: '100%',
        display: 'block',
        alignItems: 'center'
      }}
    >
      <h3 class='card-header text-center'>{name}</h3>
      <br />
      <img
        class='mx-auto d-block'
        style={{
          width: 180,
          height: 150
        }}
        src={logo}
        alt='Logo'
      />
      <div class='card-body'>
        <h5 class='card-title text-center'>{description}</h5>

        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>Type: {type}</li>
          <li class='list-group-item'>Cost: {cost}</li>
          <li class='list-group-item'>Rarity: {rarity}</li>
        </ul>
        <br />
        <button className='btn btn-primary mx-auto d-block'>Details</button>
        <br />
      </div>
    </div>
  );
}
