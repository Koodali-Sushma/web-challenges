//function to findOutlier(arrayOfNumbers)

function findOutlier(numberList) {
  const evenArray = [];
  const oddArray = [];
  let foundNumber;
  // traverse through the array and create 2 seperate even and odd arrays.
  numberList.forEach((number) => {
    if (number % 2 === 0) evenArray.push(number);
    else oddArray.push(number);
  });
  // read the array which is small in length into to variable
  // ---- basically the array with lesser length contains outlier either even or odd
  evenArray.length < oddArray.length
    ? (foundNumber = evenArray)
    : (foundNumber = oddArray);

  return foundNumber;
}

//number Array inputs
const numberArray1 = [2, 4, 0, 100, 4, 11, 2602, 36]; //Expected output 11
const numberArray2 = [160, 3, 1719, 19, 11, 13, -21]; //expected output 160
//Store returned number and print
let outlierNumber = findOutlier(numberArray1);
console.log(
  "Given array\n",
  numberArray1,
  "\nOutlier number=",
  outlierNumber.toString(),
);
outlierNumber = findOutlier(numberArray2);
console.log(
  "Given array\n",
  numberArray2,
  "\nOutlier number=",
  outlierNumber.toString(),
);
