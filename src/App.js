import { useState } from "react";
import { Square } from "./components/Square";
import { TURNS, CHANCES_TO_WIN } from "./constants/constants"

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null)

  const isThereWinner = (squareToCheck) => {
    for (const tricky of CHANCES_TO_WIN) {
      const [a, b, c] = tricky
      if (
        squareToCheck[a] &&
        squareToCheck[a] === squareToCheck[b] &&
        squareToCheck[b] === squareToCheck[c]
      ) {
        return squareToCheck[a]
      }
    }
    return null
  }
  
  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const nextTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(nextTurn)

    const isWinner = isThereWinner(newBoard)

    if (isWinner) {
      setWinner(isWinner)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    updateBoard()
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
        {winner ?
          <>
            <p className="is-winner">The winner is: <strong> {winner} </strong></p>
            <button onClick={resetBoard}>Restart</button>
          </> :
          <>
            <p className="is-winner">The next turn is for: </p>
            <Square className={turn === TURNS.X ? 'square block' : 'hide'}>{TURNS.X}</Square>
            <Square className={turn === TURNS.O ? 'square block' : 'hide'}>{TURNS.O}</Square>
          </>
        }
      </section>
    </div>
  );
}

export default App;
