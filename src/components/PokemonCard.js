import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { name, hp, frontSprite, backSprite } ) {  

  function capFirstLetter(wordToCap) {
    return wordToCap ? wordToCap[0].toUpperCase() + wordToCap.slice(1) : '';
  }

  const [flipImg, setflipImg] = useState(true)

  function flipCard() {
    return setflipImg(!flipImg)
  }
  

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={flipCard} src={flipImg ? frontSprite : backSprite} alt={name} title={`What's that Pokemon? ${capFirstLetter(name)}!!`} />
        </div>
        <div className="content">
          <div className="header">{capFirstLetter(name)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            HP: {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
