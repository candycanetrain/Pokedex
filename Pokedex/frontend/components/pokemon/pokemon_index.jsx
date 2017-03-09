import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item.jsx'


class PokemonIndex extends React.Component {


  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map( (poke) => (
          <PokemonIndexItem key={poke.id} poke={poke} />
        ))}
       </ul>
    );
  }
}

export default PokemonIndex;
