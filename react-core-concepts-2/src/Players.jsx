import { useState } from "react";

const Players = () => {
  const [player, setPlayer] = useState(10);
  const addPlayer = () => {
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  };
  const removePlayer = () => {
    const newPlayer = player - 1;
    setPlayer(newPlayer);
  };

  return (
    <>
      <div>
        <h4>Players: {player}</h4>
        <button onClick={addPlayer}>Add Player</button>
        <button onClick={removePlayer}>Remove Player</button>
      </div>
    </>
  );
};

export default Players;
