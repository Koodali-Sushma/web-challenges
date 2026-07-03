import { getRandomColor } from "../../utils/randomColor.js";

export function drawSquare(shapeName) {
  const square = document.createElement("div");
  square.classList.add(shapeName);
  square.addEventListener("click", () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;
  });
  return square;
}
