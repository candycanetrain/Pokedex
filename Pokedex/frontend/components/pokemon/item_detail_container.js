import { connect } from 'react-redux';
import {selectPokemonItem} from '../../reducers/selectors.js';
import {ItemDetail} from './item_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  pokemonItemDetail: selectPokemonItem(state, ownProps.params.itemId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
