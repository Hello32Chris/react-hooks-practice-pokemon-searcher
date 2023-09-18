import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { pokeDex, renderedPok } ) {
  
  const filteredCards = renderedPok.filter((pokemon) => {
    if (pokemon.name.toLowerCase().includes(pokeDex.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })
  const pokemonCards = filteredCards.map((pokemon) => {
    return <PokemonCard 
      key = {pokemon.id}
      name = {pokemon.name}
      hp = {pokemon.hp}
      frontSprite = {pokemon.sprites.front}
      backSprite = {pokemon.sprites.back}
    />


  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}



export default PokemonCollection;