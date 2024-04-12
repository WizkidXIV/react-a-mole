import React, { useState } from 'react';
import './App.css';
import MoleContainer from './MoleContainer';

function App() {
  const [score, setScore] = useState(0);

  const moleHills = Array.from({ length: 9 }, (_, index) => (
    <MoleContainer key={index} setScore={setScore} />
  ));

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <div>Score: {score}</div>
      <div className="moleHills">{moleHills}</div>
    </div>
  );
}

export default App;
