import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";
import React from "react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setISFavourite] = useState(false);

  function handleToggle() {
    setISFavourite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleToggle}
      aria-label="favorite"
    >
      {/* Conditionally render StarFilled if isFavorite is true, otherwise Star */}
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
