//Function to calculate
function multiples(number, limit) {
  const numberArray = [number];

  for (let i = 0; numberArray[i] < limit; i++) {
    numberArray.push(numberArray[i] + number);
    console.log(numberArray);
  }

  return numberArray;
}
const finalArray = multiples(2, 6);
console.log("finalArray", finalArray);
