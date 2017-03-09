import React from 'react';

class PokemonIndex extends React.Component {


  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map( (poke) => (
          <li>{poke.name}<img src={poke.image_url} height="200" /></li>
        ))}
       </ul>
    );
  }
}

export default PokemonIndex;
