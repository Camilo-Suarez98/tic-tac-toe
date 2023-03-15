import { useState } from "react";
import { Square } from "./components/Square";

const TURNS = {
  X: 'X',
  O: 'O'
}

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  
  const updateBoard = (index) => {
    if(board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const nextTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(nextTurn)
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
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square className={turn === TURNS.X ? 'square block' : 'hide'}>{TURNS.X}</Square>
        <Square className={turn === TURNS.O ? 'square block' : 'hide'}>{TURNS.O}</Square>
      </section>
    </div>
  );
}

export default App;
