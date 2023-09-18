import React from "react";

function Search( { setpokeDex } ) {

  function pokeDexSearch(e) {
    return setpokeDex(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={pokeDexSearch} placeholder="Type Pokemon Here" className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
