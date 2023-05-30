import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementTen = () => {
    setCount(count + 10);
  };

  const handleDecrementTen = () => {
    setCount(count - 10);
  };
  return (
    <div className="App">
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrementTen}>-10</button>
      <button onClick={handleIncrementTen}>+10</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
