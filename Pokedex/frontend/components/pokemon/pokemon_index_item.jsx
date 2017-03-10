import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ({poke}) => {
  if (poke) {
    return (
      <li><Link to={`/pokemon/${poke.id}`}>{poke.name} <img src={poke.image_url} height="100"/></Link></li>
    );
  }
};
