import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];
function App() {
  // Create the state with initialEntries as the initial value
  const [entries, setEntries] = useState(initialEntries);

  // Create the function to add a new entry to our state array
  function handleAddEntry(newEntry) {
    // Generate a beautiful, formatted date string
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    // Prepend the new entry to the top of our array

    setEntries([
      {
        id: uid(), //Generate Unique ID
        date: date, //Add current date
        ...newEntry, //Copy new data from Form
      },
      ...entries, //copy all existing entries
    ]);
  }
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {/* Pass handleAddEntry to the form */}
        <EntryForm onAddEntry={handleAddEntry} />
        {/* Pass our active entries state to the list section */}
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
