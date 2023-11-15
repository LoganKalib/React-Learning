// this is the main game board it renders what we see
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((symbol, cIndex) => (
              <li key={cIndex}>
                <button
                  onClick={() => onSelectSquare(rIndex, cIndex)}
                  disabled={symbol !== null}
                >
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
