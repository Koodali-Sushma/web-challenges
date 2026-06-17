console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour 
of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.
let numberOfDaysPracticing = yearsPracticing * 365;
let numberOfDaysRemaining = 10 * 365 - numberOfDaysPracticing;
let percentageRemaining = (numberOfDaysPracticing / 3650) * 100;
let cummulativeNumberOfDays = numberOfDaysPracticing / 24;

console.log("You've been practicing for: " + yearsPracticing + " years");
console.log(
  "You've been practicing for(in days): " + numberOfDaysPracticing + " days",
);
console.log(
  "Remaining days to reach 10yr milestone: " + numberOfDaysRemaining + " days",
);
console.log("Percentage completed: " + percentageRemaining + " %");
console.log(
  "Cummulative no. of days you are practicing: " +
    cummulativeNumberOfDays +
    " days",
);
