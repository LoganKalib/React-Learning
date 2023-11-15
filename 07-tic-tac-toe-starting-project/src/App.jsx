import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/Log/Log";
import GameOver from "./Components/GameOver/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./Winning_combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function derivedGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function derivedWinner(gameBoard, player) {
  let winner;
  for (const combo of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combo[0].row][combo[0].column];
    const secondSquare = gameBoard[combo[1].row][combo[1].column];
    const thridSqaure = gameBoard[combo[2].row][combo[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thridSqaure
    ) {
      winner = player[firstSquare];
    }
  }

  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [player, setPlayers] = useState(PLAYERS);

  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = derivedGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard, player);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(row, col) {
    setGameTurns((preTurns) => {
      const curPlayer = derivedActivePlayer(preTurns);

      const updateTurn = [
        { square: { row: row, col: col }, player: curPlayer },
        ...preTurns,
      ];

      return updateTurn;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayers((prePlayers) => {
      return {
        ...prePlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
