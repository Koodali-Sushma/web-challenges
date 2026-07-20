const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let currentLongestWord = "";
  let lengthOfword = 0;

  console.log(words);

  for (word of words) {
    if (word.length > lengthOfword) {
      lengthOfword = word.length;
      currentLongestWord = word;

      console.log(
        "new longest word is ",
        currentLongestWord,
        "with length ",
        lengthOfword,
      );
    }
  }

  return currentLongestWord;
}
const longestWord = findLongestWord(words);
console.log("\n\nFinal longest word found is: ", longestWord);
