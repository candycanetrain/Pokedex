import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util.js';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions.js';
import configureStore from './store/store.js';
import selectAllPokemon from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
});
