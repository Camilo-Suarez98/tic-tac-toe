import { useState } from "react";

const TURNS = {
  X: 'x',
  O: 'o'
}

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  console.log(board);

  return (
    <div className="App board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <div className="square" key={index}>
              {_}
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
