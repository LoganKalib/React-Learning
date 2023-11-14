import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  //when changing the state based on the old state, its best practice to pass a function, it will take the old state as a parameter
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // we accept the event created by the onChange
  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <span>
            {/*on change returns the key press on each change.*/}
            {/*by using the input to both change and display the value this is known as 2 way binding*/}
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              required
            />
          </span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
