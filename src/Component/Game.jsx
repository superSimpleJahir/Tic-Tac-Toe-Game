import { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsnext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsnext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(index) {
    setCurrentMove(index);

    setXIsnext(index % 2 === 0);
  }
  const allHistory = history.map((move, index) => {
    let description;
    if (index > 0) {
      description = `Go to the move # ${index}.`;
    } else {
      description = `Go to start the game.`;
    }
    return (
      <li key={index} className="font-semibold">
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center mt-28 gap-8">
      <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      <History allHistory={allHistory} />
    </div>
  );
};

export default Game;
