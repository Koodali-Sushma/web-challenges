console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result 
in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, a
nd store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/
//Step -1
let mealCost = 90;
let tip = 3;
let tipAmount;
tipAmount = mealCost * (tip / 100);
totalCost = mealCost + tipAmount;
console.log("meal cost = ", mealCost);
console.log("meal tip % = ", tip);
console.log("tip Amount = ", tipAmount);
console.log("------------------------------------------");
console.log("Total meal cost = ", totalCost);
