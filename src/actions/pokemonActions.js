import axios from 'axios';
import { GET_POKEMON, ADD_POKEMON, DELETE_POKEMON } from './types';

export const getPokemon = (pokeid) => dispatch => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
    .then(res => {
      const pokemon = {
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        default_image: res.data.sprites.front_default,
        base_experience: res.data.base_experience
      };
      dispatch({type: GET_POKEMON});
      dispatch(addPokemon(pokemon));
    })
};

export const getPokemonInitial = () => dispatch => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/7/')
    .then(res => {
      const pokemon = {
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        default_image: res.data.sprites.front_default,
        base_experience: res.data.base_experience
      };
      dispatch({type: GET_POKEMON});
      dispatch(addPokemon(pokemon));

      axios
        .get('https://pokeapi.co/api/v2/pokemon/4/')
        .then(res => {
          const pokemon = {
            id: res.data.id,
            name: res.data.name,
            weight: res.data.weight,
            height: res.data.height,
            default_image: res.data.sprites.front_default,
            base_experience: res.data.base_experience
          };
          dispatch({type: GET_POKEMON});
          dispatch(addPokemon(pokemon));

          axios
            .get('https://pokeapi.co/api/v2/pokemon/1/')
            .then(res => {
              const pokemon = {
                id: res.data.id,
                name: res.data.name,
                weight: res.data.weight,
                height: res.data.height,
                default_image: res.data.sprites.front_default,
                base_experience: res.data.base_experience
              };
              dispatch({type: GET_POKEMON});
              dispatch(addPokemon(pokemon));
            });  // Closing of third nested axios call for pokemon 1

        });  // Closing of second nested axios call for pokemon 4

    });  // Closing of first axios call for pokemon 7
};

export const addPokemon = (pokemon) => dispatch => {
  dispatch({
    type: ADD_POKEMON,
    payload: pokemon
  });
};

export const deletePokemon = (id) => dispatch => {
  dispatch({
    type: DELETE_POKEMON,
    payload: id
  });
};