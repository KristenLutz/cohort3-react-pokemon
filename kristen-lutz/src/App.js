import React, { Component } from "react";
import {PokeCard} from './features/poke-card.js';
import {Header} from './components/header.js';
import {Input} from './components/input.js';
import {Button} from './components/button.js';
import "./App.css";

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`http://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites.front_default
    }));

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      name: '',
      imgUrl:'',
    };
  }

  fetchPokemon = event => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${'this.state.searchTerm'}`)
      .then(response => response.json())
      .then(pokemonData => {
        this.setState({
          name: pokemonData.name,
          imgUrl: pokemonData.sprites.front_default,
        });
        return pokemonData;
      })
    };

  saveSearchTerm = (event) => this.setState({ searchTerm: event.target.value});

  render() {
    return (
      <div>
        <Header>Gotta Fetch em All</Header>
        <Input
          onInputChange={this.saveSearchTerm}/>
        <Button onClick = {this.fetchPokemon}>Search</Button>
        <PokeCard
          name = {this.state.name}
          imgUrl = {this.state.imgUrl} >

        </PokeCard>
      </div>
    );
  }
}

export default App;

