import { RECEIVE_POKE } from '../actions/pokemon_actions.js';
const defaultState = () =>({
  attack: "",
  defense: "",
  id: "",
  image_url: "",
  items: [],
  moves: [],
  poke_type: ""
})

const pokemonDetailReducer = (state = defaultState(), action ) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
