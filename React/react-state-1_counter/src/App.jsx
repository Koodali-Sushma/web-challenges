import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Handler to increase the count
  function handleIncrement() {
    setCount(count + 1);
  }

  // Handler to decrease the count
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
