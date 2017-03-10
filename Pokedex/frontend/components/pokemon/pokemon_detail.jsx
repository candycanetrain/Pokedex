import React from 'react';
import {ItemDetail} from './item_detail.jsx';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPoke(this.props.params.Id);
  }

  componentWillReceiveProps(newProps){
    if(newProps.params.Id !== this.props.params.Id){
      this.props.requestPoke(newProps.params.Id);
    }
  }

  render() {
    // debugger
    console.log(this.props.pokemonDetails);
    return (
    <div>
      {this.props.children}

      <ul>
        <li><img src={this.props.pokemonDetails.image_url}/></li>
        <li>Attack: {this.props.pokemonDetails.attack}</li>
        <li>Defense: {this.props.pokemonDetails.defense}</li>
        <li>Id: {this.props.pokemonDetails.id}</li>
        <li>Moves:
          <ul>
            {this.props.pokemonDetails.moves.map((move, idx) => (
              <li key={idx}>{move}</li>
            ))}
          </ul>
        </li>
        <li>Items:
          <ul>
            {this.props.pokemonDetails.items.map((item) => (
              <li>Hi</li>
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
