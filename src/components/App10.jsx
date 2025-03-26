import React, { useState } from 'react';
import './App10.css';

export default function App10() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState('');

  const handleRunsClick = () => {
    if (wickets < 10) {
      setRuns(runs + 1);
      setMessage('Well done!');
    }
  };

  const handleWicketsClick = () => {
    if (wickets < 10) {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      if (newWickets === 10) {
        setMessage('Game Over');
      } else {
        setMessage('Better luck next time!');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Scoreboard</h1>
      <h2>SRH vs RCB</h2>
      <p>Runs: {runs}</p>
      <p>Wickets: {wickets}</p>
      <button onClick={handleRunsClick} disabled={wickets === 10}>Runs</button>
      <button onClick={handleWicketsClick} disabled={wickets === 10}>Wickets</button>
      <p>{message}</p>
    </div>
  );
}