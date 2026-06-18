console.clear();
const name = "UserName";
// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

SUPER_SECRET_PASSWORD === receivedPassword
  ? console.log("Welcome!!!! You are logged in as", name)
  : console.log("Access Denied!!!");

// Part 2: Even / Odd
const number = 3;
if (number % 2 === 0) {
  console.log("Number is EVEN");
} else {
  console.log("Number is ODD");
}
// Part 3: Hotdogs
const numberOfHotdogs = 505;

let cost = 0;

if (numberOfHotdogs < 5) {
  cost = numberOfHotdogs * 2;
  (console.log("Total cost for ", numberOfHotdogs, " Hotdogs is : ", cost),
    "€");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  cost = numberOfHotdogs * 1.5;
  console.log("Total cost for ", numberOfHotdogs, " Hotdogs is : ", cost, "€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  cost = numberOfHotdogs * 1;
  console.log("Total cost for ", numberOfHotdogs, " Hotdogs is : ", cost, "€");
} else if (numberOfHotdogs >= 1000000) {
  cost = numberOfHotdogs * 0.1;
  console.log("Total cost for ", numberOfHotdogs, " Hotdogs is : ", cost, "€");
}
// Part 4: Daytime
const currentHour = 21;

let statement = "";
currentHour <= 17
  ? (statement = "Still need to learn")
  : (statement = "Party Time!!!");
console.log(statement);

// Part 5: Greeting
const userName = "Klaus";
const greeting = "Hello " + (userName == "Klaus" ? " Klaus" : userName) + "!";

console.log(greeting);
