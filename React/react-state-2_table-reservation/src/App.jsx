import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // Declare the state here in the parent (initial value of 2 people)
  const [people, setPeople] = useState(2);

  // Create the helper functions to update state
  function handleAdd() {
    setPeople(people + 1);
  }

  function handleSubtract() {
    // Optional safety check: don't let reservations drop below 0 people
    if (people > 0) {
      setPeople(people - 1);
    }
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter people={people} onAdd={handleAdd} onSubtract={handleSubtract} />
      {/* Make the text dynamic using our state variable */}
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
