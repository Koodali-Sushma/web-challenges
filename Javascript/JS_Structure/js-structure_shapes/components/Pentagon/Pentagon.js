import { getRandomColor } from "../../utils/randomColor.js";

export function drawPentagon(shapeName) {
  const pentagon = document.createElement("div");
  pentagon.classList.add(shapeName);
  pentagon.addEventListener("click", () => {
    const color = getRandomColor();
    pentagon.style.backgroundColor = color;
  });
  return pentagon;
}
