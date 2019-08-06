import React from 'react';

const PokeDetails = ({pokemon}) => {

  if(!pokemon) return null;
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="pokemon_sprite" />
      <h3>Type: {pokemon.types.map(pokemon => pokemon.type.name)}</h3>
      <h3>Attack: {pokemon.stats[4].base_stat}</h3>
      <h3>Defence: {pokemon.stats[3].base_stat}</h3>
      <h3>HP: {pokemon.stats[5].base_stat}</h3>
    </div>
  )
}

export default PokeDetails
