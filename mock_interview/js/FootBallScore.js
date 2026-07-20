// function calculateScore()
function calculateScore(inputStringScore) {
  let xScore = 0;
  let yScore = 0;
  let xScoreSum = 0;
  // traverse through the StringArray and in each String score
  // read the score of 'x' to a variable xScore
  // and 'y' to a variable yScore
  // we already know the pattern x:y ----> arr[0]-'x' score | arr[2]-'y' score
  for (score of inputStringScore) {
    //console.log(score);

    xScore = score[0];
    yScore = score[2];
    //console.log("Score ", score, " x-score= ", xScore, "y-score= ", yScore);
    // compare value of x and y => decide who won that particular match
    // if 'x' win then add score to xTotalScore
    // return xTotalScore
    if (xScore > yScore) {
      xScoreSum = xScoreSum + 3;
    } else if (xScore === yScore) {
      xScoreSum = xScoreSum + 1;
    }
  }
  return xScoreSum;
}

//scoreStringArray
const scoreStringArray = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
]; //Expected output for this array-input is 30

// call function calculateScore(pass scoreStringArray)
const finalScoreOfX = calculateScore(scoreStringArray);
console.clear();
console.log(scoreStringArray);
//Store the total score of x-team and display
console.log("Final Score of TEAM-X is ", finalScoreOfX);
