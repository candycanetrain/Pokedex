import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util.js';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions.js';
import configureStore from './store/store.js';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, rootEl);
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
});
