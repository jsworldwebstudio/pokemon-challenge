import { GET_POKEMON, ADD_POKEMON, DELETE_POKEMON } from '../actions/types';

const initialState = {
  pokemons: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons]
      };
      case ADD_POKEMON:
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload]
        };
        case DELETE_POKEMON:
          return {
            ...state,
            pokemons: state.pokemons.filter(pokemon => pokemon.id !== action.payload)
          };
    default:
    return state;
  }
};