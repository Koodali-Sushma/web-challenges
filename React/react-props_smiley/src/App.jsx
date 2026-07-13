export default function App() {
  return (
    <main>
      <h1>How are we feeling today?</h1>

      {/* 1. Explicitly true */}
      <p>
        Happy: <Smiley isHappy={true} />
      </p>

      {/* 2. Shorthand for true (just writing the prop name) */}
      <p>
        Also Happy: <Smiley isHappy />
      </p>

      {/* 3. Explicitly false */}
      <p>
        Sad: <Smiley isHappy={false} />
      </p>

      {/* 4. Missing prop (defaults to false/undefined) */}
      <p>
        Also Sad: <Smiley />
      </p>
    </main>
  );
}

function Smiley({ isHappy }) {
  return (
    <span role="img" aria-label="smiley">
      {isHappy ? "😊" : "😢"}
    </span>
  );
}
