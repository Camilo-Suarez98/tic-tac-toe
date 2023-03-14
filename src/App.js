import { useState } from "react";
import { Square } from "./components/Square";

const TURNS = {
  X: 'X',
  O: 'O'
}

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  
  const updateBoard = () => {
    console.log('hello memo');
  }

  return (
    <div className="App board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              className='square'
              key={index}
              updateBoard={updateBoard}
              index={index}
            >
              {_}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square className={turn === TURNS.X ? 'hide' : 'square block'}>{TURNS.X}</Square>
        <Square className={turn === TURNS.O ? 'hide' : 'square block'}>{TURNS.O}</Square>
      </section>
    </div>
  );
}

export default App;
