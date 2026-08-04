//function to create a key:value pair of character:no.OfOccurrences(parameter:inputString)
//count no.OfOccurrences of all characters(charArray[key:value])
function setKeyValuePair(inputString) {
  let tempCount = 0;

  const charMap = new Map();
  //traverse through the array ---> increase count when character matches
  for (char of inputString) {
    if (charMap.has(char)) {
      tempCount = charMap.get(char);
      //console.log(char, tempCount);
      charMap.set(char, ++tempCount);
    }
    //if character doesn't exist then adds new key:value pair to the array
    else {
      charMap.set(char, 1);
    }
  }
  //console.log(charMap);
  return charMap;
}

//After traversing through the input now read the created array and check for empty

//inputString:
const input = "AbbcccDdDd";
console.log(" Input String: ", input);
//call function to read-input and create new array of key:value pairs
const charMapArray = setKeyValuePair(input.toLowerCase());
//console.log("Map data:", charMapArray);
/*-------------------------------------------------------------------------------------------------------
-----Converting the map data into String format how the output was demanded in the Problem Statement-----
--------output expected  =>  a:1,b:2,c:3,d:4   ------------------------------------------------------------*/
function convertInputToObject(inputString) {
  const charObject = [...inputString]
    .map(([key, value]) => `${key}:${value}`)
    .join(", ");

  return charObject;
}

const characterObjectOutput = convertInputToObject(charMapArray);
console.log(
  "Final key:value pair of character:count is \n",
  characterObjectOutput,
);
