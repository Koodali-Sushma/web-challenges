import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useState } from "react";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    isFavorite: false,
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    isFavorite: false,
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    isFavorite: false,
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    isFavorite: false,
    notes: "My React-ion when I learned about React: Yay!",
  },
];
function App() {
  // Create the state with initialEntries as the initial value
  /* const [entries, setEntries] = useState(initialEntries); */

  //use-local-storage-state
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  //Create a new state to keep track of the active tab filter
  const [filterEntries, setFilterEntries] = useState("all");

  // the function to add a new entry to our state array
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
        isFavorite: false, //Add isFavorite default false
        ...newEntry, //Copy new data from Form
      },
      ...entries, //copy all existing entries
    ]);
  }
  // the toggle handler function
  function handleToggleFavorite(idToToggle) {
    setEntries(
      // We update state using an immutable .map() loop
      entries.map((entry) => {
        // Find the single entry that matches the clicked ID
        if (entry.id === idToToggle) {
          // Return a brand new object with the flipped isFavorite boolean
          return { ...entry, isFavorite: !entry.isFavorite };
        }
        // If it doesn't match, return the entry completely unchanged
        return entry;
      }),
    );
  }
  // Functions to switch the active filter string state
  function handleShowAllEntries() {
    setFilterEntries("all");
  }
  function handleShowFavoriteEntries() {
    setFilterEntries("favorites");
  }
  // Derived Data: Create a filtered subset array (Runs automatically on every render)

  /*  const favoriteEntries = entries.filter(function (entry) {
  if (entry.isFavorite === true) {
    return true;  // Keep this entry in the new array
  } else {
    return false; // Skip this entry
  }
}); */

  const favoriteEntries = entries.filter((entry) => entry.isFavorite);
  const favoriteEntriesCount = favoriteEntries.length;
  const allEntriesCount = entries.length;

  console.log("entries length=", allEntriesCount);
  console.log("FavoriteEntries length=", favoriteEntriesCount);

  // Determine which array we actually want to show the user right now
  const entriesToDisplay = filterEntries === "all" ? entries : favoriteEntries;
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {/* Pass handleAddEntry to the form */}
        <EntryForm onAddEntry={handleAddEntry} />
        {/* Pass our active entries state to the list section */}
        <EntriesSection
          entries={entriesToDisplay}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          totalEntries={allEntriesCount}
          totalFavoriteEntries={favoriteEntriesCount}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
