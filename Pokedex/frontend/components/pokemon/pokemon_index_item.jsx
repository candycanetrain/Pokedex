import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ({poke}) => {
  if (poke) {
    return (
      <li><Link to="/pokemon/:pokemonId">{poke.name} <img src={poke.image_url} height="100"/></Link></li>
    );
  }
};
