import { connect } from 'react-redux';
import { requestPoke } from '../../actions/pokemon_actions.js';
import PokemonDetail from './pokemon_detail.jsx';

const mapStateToProps = state => {
  return({
    pokemonDetails: state.pokemonDetails
  });
};


const mapDispatchToProps = (dispatch) => {
  return ({requestPoke: (id) => dispatch(requestPoke(id))});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
