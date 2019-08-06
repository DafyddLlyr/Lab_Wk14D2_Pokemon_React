import React, {Component} from 'react'
import PokeSelect from '../components/PokeSelect'
import PokeDetails from '../components/PokeDetails'
import '../App.css';

class PokeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      leftPokemon: null,
      rightPokemon: null
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  // componentDidMount() {
  //   const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
  //   const tempPokedex = [];
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(pokemonContainer => pokemonContainer.results.map(pokemon => {
  //       fetch(pokemon.url)
  //       .then(res => res.json())
  //       .then(pokemon => tempPokedex.push(pokemon))
  //       .then(() => this.render())
  //     }))
  //     .then(() => this.setState({ pokedex: tempPokedex }))
  //     .catch(err => console.error(err))
  //   }

  componentDidMount() {
    const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
    const tempPokedex = [];
    fetch(url)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokedex: pokemon.results }))
      .catch(err => console.error(err))
  }

  handlePokemonSelected(index, side) {
    const selectedPokemonObject = this.state.pokedex[index];
    fetch(selectedPokemonObject.url)
      .then(res => res.json())
      .then(selectedPokemon => {
        if(side === "left") {
          this.setState({ leftPokemon: selectedPokemon })
        } else {
          this.setState({ rightPokemon: selectedPokemon })
      }})
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
      <div className="pokeComparer">
      <div>
        <PokeSelect
          pokedex={this.state.pokedex}
          handlePokemonSelected={this.handlePokemonSelected}
          side="left"/>
        <PokeDetails pokemon={this.state.leftPokemon} />
      </div>
      <div>
      <PokeSelect
        pokedex={this.state.pokedex}
        handlePokemonSelected={this.handlePokemonSelected}
        side="right" />
      <PokeDetails pokemon={this.state.rightPokemon} />
      </div>
      </div>
      </>
    )
  }
}

export default PokeBox
