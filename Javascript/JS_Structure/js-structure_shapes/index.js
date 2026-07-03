import { drawCircle } from "./components/Circle/Circle.js";
import { drawSquare } from "./components/Square/Square.js";
import { drawPentagon } from "./components/Pentagon/Pentagon.js";
import { getRandomColor } from "./utils/randomColor.js";
console.clear();

const root = document.getElementById("root");

const circle = drawCircle("circle");
const square = drawSquare("square");
const pentagon = drawPentagon("pentagon");
console.log(circle);
root.append(circle, square, pentagon);

/* const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = "#ccc";
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = "#ccc";
}); */
