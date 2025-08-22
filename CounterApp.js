import React, { useState } from "react";
import "./CounterApp.css"; // Import the CSS file

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="count-display">Count: {count}</h1>
      <div className="button-container">
        <button className="counter-button increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="counter-button decrement-btn" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-button reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
