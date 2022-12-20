import { pokemons } from "./TableDetail";


export function getPokemon() {
  const pokemonList = pokemons;
  return pokemonList;
}



export function filterPokemon(pokeType) {
  let filtredPokemon = getPokemon().filter(type => type.status === pokeType);
  return filtredPokemon;
}

