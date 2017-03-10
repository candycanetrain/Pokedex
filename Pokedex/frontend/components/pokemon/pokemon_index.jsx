import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item.jsx';


class PokemonIndex extends React.Component {


  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        {this.props.children}
        <ul>
          {this.props.pokemon.map( (poke) => (
            <PokemonIndexItem key={poke.id} poke={poke} />
          ))}
         </ul>
       </div>
    );
  }
}

export default PokemonIndex;
