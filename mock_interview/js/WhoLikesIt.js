function likes(names) {
  // TODO
  let stringToBeReturned = [];
  const arrayLength = names.length;
  console.log("Array Length =", arrayLength);
  let remainingNames = 0;
  if (arrayLength === 0) {
    stringToBeReturned.push("no one");
    return stringToBeReturned.push("likes this");
  }
  for (let i = 1; i <= arrayLength; i++) {
    stringToBeReturned.push(names[i - 1]);
    remainingNames = arrayLength - i;
    if (remainingNames === 1) {
      stringToBeReturned.push("and");
    } else if (remainingNames > 3) {
      stringToBeReturned.push("and " + remainingNames + " others");
    }
  }
  console.log("String data inside function: ", stringToBeReturned);
  stringToBeReturned.push("likes this");
  return stringToBeReturned;
}
const array1 = ["Alex", "Jacob", "Mark", "Max"];
const array2 = ["Max", "John", "Mark"];
const array3 = ["Peter"];
const array4 = [];
const string = likes(array1);
console.log("Array1: ", string.join(string === "and" ? " " : ", "));
