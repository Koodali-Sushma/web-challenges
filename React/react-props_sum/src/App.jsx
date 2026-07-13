export default function App() {
  return (
    <div>
      {/* Passing numbers requires curly braces */}
      <Sum valueA={5} valueB={3} />
      <Sum valueA={12} valueB={28} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;

  return (
    <p>
      {valueA} + {valueB}={result}
    </p>
  );
}
