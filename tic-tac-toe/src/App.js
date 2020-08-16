import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [history, updateHistory] = useState([[]])
  const [xIsNext, updateNext] = useState(true);

  const handleClick = (i) => {
    console.log(history)
    const historyState = history;
    const current = historyState[historyState.length - 1].slice();
    if(calculateWinner(current) || current[i]) {
      return
    }

    current[i] = xIsNext ? 'X' : 'O';
    updateHistory(historyState.concat([current]));
    updateNext(!xIsNext);
  }

  const winner = calculateWinner(history[history.length-1])
  let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  return (
    <div className="App">
      <div className="game-board">
        <Board
          square={history[history.length - 1]}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        {status}
        <button onClick={() => {
          updateHistory([[]])
          updateNext(true)
        }}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
