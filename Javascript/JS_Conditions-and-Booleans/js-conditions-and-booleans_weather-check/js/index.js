// Change this value to test different "weather" conditions.
const weather = "summer";

switch (weather) {
  case "rainy":
    console.log("It's a Rainy day");
    break;
  case "summer":
    console.log("It's a Sunny day");
    break;
  case "winter":
    console.log("It's a Winter day");
    break;
  default:
    console.log("It's a Winter day");
    break;
}
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (temperature) {
  case temperature > 0 && temperature <= 15:
    console.log("It's a Rainy day");
    break;
  case temperature > 15 && temperature <= 25:
    console.log("It's a Spring day");
    break;
  case temperature > 25 && temperature <= 40:
    console.log("It's a Summer day");
    break;
  case temperature <= 0:
    console.log("It's a Winter day");
    break;
  default:
    console.log("Wrong temperature");
    break;
}
