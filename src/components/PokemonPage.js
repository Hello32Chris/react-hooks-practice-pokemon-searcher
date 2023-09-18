import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage( { setrenderPok, renderedPok } ) {

  const [pokeDex, setpokeDex] = useState("");

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setrenderPok={setrenderPok} />
      <br />
      <Search setpokeDex={setpokeDex}/>
      <br />
      <PokemonCollection pokeDex={pokeDex} renderedPok={renderedPok} />
    </Container>
  );
}

export default PokemonPage;
