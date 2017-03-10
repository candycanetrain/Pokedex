import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount(){
    this.props.requestPoke(this.props.params.Id);
  }

  componentWillReceiveProps(newProps){
    this.props.requestPoke(newProps.params.Id);
  }

  render() {

    return (
    <div>
      <ul>
        <li>Attack: {this.props.pokemonDetails.attack}</li>
        <li>Defense: {this.props.pokemonDetails.defense}</li>
        <li>Id: {this.props.pokemonDetails.id}</li>
        <li><img src={this.props.pokemonDetails.image_url}/></li>
        <li>Moves:
          <ul>
            {this.props.pokemonDetails.moves.map((move, idx) => (
              <li key={idx}>{move}</li>
            ))}
          </ul>
        </li>
        <li>PokeType: {this.props.pokemonDetails.poke_type}</li>


      </ul>
    </div>
  );
  }
}

export default PokemonDetail;