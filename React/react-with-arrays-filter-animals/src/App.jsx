import React from "react";
import "./styles.css";
import { useState } from "react";

const animals = [
  { id: "1", name: "Dog", habitat: "Domestic Animal", emoji: "🐕" },
  { id: "2", name: "Cat", habitat: "Domestic Animal", emoji: "🐈" },
  { id: "3", name: "Hamster", habitat: "Domestic Animal", emoji: "🐹" },
  { id: "4", name: "Parrot", habitat: "Domestic Animal", emoji: "🦜" },
  { id: "5", name: "Fish", habitat: "Domestic Animal", emoji: "🐠" },

  { id: "6", name: "Fox", habitat: "Forest", emoji: "🦊" },
  { id: "7", name: "Bear", habitat: "Forest", emoji: "🐻" },
  { id: "8", name: "Owl", habitat: "Forest", emoji: "🦉" },
  { id: "9", name: "Deer", habitat: "Forest", emoji: "🦌" },
  { id: "10", name: "Hedgehog", habitat: "Forest", emoji: "🦔" },

  { id: "11", name: "Whale", habitat: "Ocean", emoji: "🐋" },
  { id: "12", name: "Dolphin", habitat: "Ocean", emoji: "🐬" },
  { id: "13", name: "Crab", habitat: "Ocean", emoji: "🦀" },
  { id: "14", name: "Lobster", habitat: "Ocean", emoji: "🦞" },
  { id: "15", name: "Shark", habitat: "Ocean", emoji: "🦈" },

  { id: "16", name: "Eagle", habitat: "Mountains", emoji: "🦅" },
  { id: "17", name: "Goat", habitat: "Mountains", emoji: "🐐" },
  { id: "18", name: "Wolf", habitat: "Mountains", emoji: "🐺" },
  { id: "19", name: "Snow Leopard", habitat: "Mountains", emoji: "🐆" },
  { id: "20", name: "Yak", habitat: "Mountains", emoji: "🐃" },
];

const habitats = ["Mountains", "Ocean", "Forest", "Domestic Animal"];

export default function App() {
  const [selectedHabitat, setSelectedHabitat] = useState("");

  //Filter the array based on state
  const displayedAnimals =
    selectedHabitat === ""
      ? animals
      : animals.filter((animal) => animal.habitat === selectedHabitat);

  return (
    <main className="container">
      <h1>Animal Habitat Filter</h1>

      {/* Render Habitat Buttons */}
      <div className="button-group" style={{ marginBottom: "20px" }}>
        {/* "Show All" Reset Button */}
        <button
          type="button"
          className="button"
          style={{
            backgroundColor: selectedHabitat === "" ? "lightblue" : "white",
          }}
          onClick={() => setSelectedHabitat("")}
        >
          All
        </button>

        {/* Dynamic Buttons from array */}
        {habitats.map((habitat) => {
          const isSelected = selectedHabitat === habitat;
          return (
            <button
              key={habitat} // 🔑 Unique key
              type="button"
              className="button"
              style={{ backgroundColor: isSelected ? "lightblue" : "white" }} // BONUS: Highlight active
              onClick={() => setSelectedHabitat(habitat)} // Set state on click
            >
              {habitat}
            </button>
          );
        })}
      </div>
      {/* Display Filtered Animals */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {displayedAnimals.map((animal) => (
          <li
            key={animal.id} // 🔑 Unique key from object id
            style={{
              padding: "10px",
              margin: "5px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
              {animal.emoji}
            </span>
            <strong>{animal.name}</strong>
            <small style={{ color: "gray", marginLeft: "10px" }}>
              ({animal.habitat})
            </small>
          </li>
        ))}
      </ul>
    </main>
  );
}
