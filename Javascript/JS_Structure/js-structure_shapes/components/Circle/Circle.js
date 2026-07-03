import { getRandomColor } from "../../utils/randomColor.js";

export function drawCircle(shapeName) {
  const circle = document.createElement("div");
  circle.classList.add(shapeName);
  circle.addEventListener("click", () => {
    const color = getRandomColor();
    circle.style.backgroundColor = color;
  });
  return circle;
}
