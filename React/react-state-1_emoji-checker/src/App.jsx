import "./styles.css";
import { useState } from "react";

const validCode = "🐡🐠🐋";
export default function App() {
  //let code = "?";
  const [inputCode, setInputCode] = useState("");

  function handleClick(emoji) {
    setInputCode(inputCode + emoji);
  }
  function handleReset() {
    setInputCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {/* Conditional display when input matches validCode */}
      {inputCode === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
