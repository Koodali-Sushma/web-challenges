//function to create a key:value pair of character:no.OfOccurrences(parameter:inputString)
//count no.OfOccurrences of all characters(charArray[key:value])
function setKeyValuePair(inputString) {
  let tempCount = 0;
  console.log(" Input String: ", inputString);
  const charMap = new Map();
  //traverse through the array ---> increase count when character matches
  for (char of inputString) {
    if (charMap.has(char)) {
      tempCount = charMap.get(char);
      console.log(char, tempCount);
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
//call function to read-input and create new array of key:value pairs
const charMapArray = setKeyValuePair(input.toLowerCase());

console.log("Final key:value pair of character:count is \n", charMapArray);
/*-----------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/
function convertInputToObject(inputString) {
  let charObject = {};
  let tempCount = 0;
  for (character of inputString) {
    if (character in charObject) {
      charObject = { [character]: ++character };
    } else {
      charObject = { [character]: 1 };
    }
  }
  //console.log(charObject);
  return charObject;
}

const characterObjectOutput = convertInputToObject(input);
console.log("Object method output\n", characterObjectOutput);
