import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      {/* Pass our dynamic count state down to the child component */}
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)} //increment on click
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)} //decrement on click
        >
          -
        </button>
      </div>
    </div>
  );
}
