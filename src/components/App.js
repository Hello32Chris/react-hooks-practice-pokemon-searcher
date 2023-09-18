import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [renderedPok, setrenderPok] = useState([])

  useEffect(() => {
  fetch("http://localhost:3001/pokemon")
    .then((resp) => resp.json())
    .then((pokeData) => setrenderPok(pokeData))
  }, []);
  
  // console.log(renderPok)

  return (
    <div className="App">
      <PokemonPage setrenderPok={setrenderPok} renderedPok={renderedPok}/>
    </div>
  );
}

export default App;