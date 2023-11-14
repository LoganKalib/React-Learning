import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameBoard(rowIndex, colIndex) {
    setGameBoard((preGameboard) => {
      // here we update the state in a immutate way, by making a copy of our original array, updating and setting it as the new state
      const updateBoard = [...preGameboard.map((inner) => [...inner])];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((symbol, cIndex) => (
              <li key={cIndex}>
                <button onClick={() => handleGameBoard(rIndex, cIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
