import values from 'lodash/values';
export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => (

  state.pokemonDetails.items.map((item) => (
    [item.happiness, item.name, item.image_url, item.price ]
  ))
);
