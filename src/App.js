import { useState } from "react";
import { Square } from "./components/Square";

const TURNS = {
  X: 'X',
  O: 'O'
}

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null)
  
  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const nextTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(nextTurn)

    if (newBoard[0] === TURNS.X & newBoard[1] === TURNS.X & newBoard[2] === TURNS.X || newBoard[0] === TURNS.O & newBoard[1] === TURNS.O & newBoard[2] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[3] === TURNS.X & newBoard[4] === TURNS.X & newBoard[5] === TURNS.X || newBoard[3] === TURNS.O & newBoard[4] === TURNS.O & newBoard[5] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[6] === TURNS.X & newBoard[7] === TURNS.X & newBoard[8] === TURNS.X || newBoard[6] === TURNS.O & newBoard[7] === TURNS.O & newBoard[8] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[0] === TURNS.X & newBoard[3] === TURNS.X & newBoard[6] === TURNS.X || newBoard[0] === TURNS.O & newBoard[3] === TURNS.O & newBoard[6] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[1] === TURNS.X & newBoard[4] === TURNS.X & newBoard[7] === TURNS.X || newBoard[1] === TURNS.O & newBoard[4] === TURNS.O & newBoard[7] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[2] === TURNS.X & newBoard[5] === TURNS.X & newBoard[8] === TURNS.X || newBoard[2] === TURNS.O & newBoard[5] === TURNS.O & newBoard[8] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[0] === TURNS.X & newBoard[4] === TURNS.X & newBoard[8] === TURNS.X || newBoard[0] === TURNS.O & newBoard[4] === TURNS.O & newBoard[8] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    } else if (newBoard[2] === TURNS.X & newBoard[4] === TURNS.X & newBoard[6] === TURNS.X || newBoard[2] === TURNS.O & newBoard[4] === TURNS.O & newBoard[6] === TURNS.O) {
      setWinner(turn)
      console.log(`${turn} is the winner`)
    }
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
        <p>The next turn is for: </p>
        <Square className={turn === TURNS.X ? 'square block' : 'hide'}>{TURNS.X}</Square>
        <Square className={turn === TURNS.O ? 'square block' : 'hide'}>{TURNS.O}</Square>
      </section>
    </div>
  );
}

export default App;
