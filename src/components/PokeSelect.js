import React from 'react';

const PokeSelect = ({pokedex, handlePokemonSelected, side}) => {

  const options = pokedex.map((pokemon, index) => {
    return(
      <option value={index} key={index}>
        {pokemon.name}
      </option>
    )
  })

  function handleChange(event) {
    handlePokemonSelected(event.target.value, side);
  }

    return (
      <select onChange={handleChange} defaultValue="default">
        <option disabled value="default">Select a Pokemon...</option>
        {options}
      </select>
    )



}

export default PokeSelect;
