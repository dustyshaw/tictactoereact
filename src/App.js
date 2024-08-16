import './App.css';
import { useState } from 'react';

function Square() {

  const [squareVal, setValue] = useState(null);

  function HandleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={HandleClick}>{squareVal}</button>
  );
}

export default function Board () {
  return (
    <>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
);
}


