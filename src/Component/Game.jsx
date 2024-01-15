import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsnext] = useState(true);
  const currentSquare = history[history.length - 1];

  function handlePlay() {}

  return (
    <>
      <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
    </>
  );
};

export default Game;
