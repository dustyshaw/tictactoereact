import './App.css';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

export default function Board () {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();  // Create a copy of the squares array
    nextSquares[i] = "X"; 
    setSquares(nextSquares);  // lets React know the state of component has changed
  }

  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
);
}


