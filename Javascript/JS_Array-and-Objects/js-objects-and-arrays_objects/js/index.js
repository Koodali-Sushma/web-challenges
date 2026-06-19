console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "John",
  age: 30,
  email: "john@example.com",
};
console.log(personWithNameAgeEmail);

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};
console.log(personAlex);
const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;
console.log("name:", nameOfAlex, "age: ", ageOfAlex);

// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};
console.log("Before Person change: ", personToChange);
personToChange.name = "Alex";
personToChange.age = 35;
console.log("After Person change: ", personToChange);
// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
};
console.log("Before: ", petPluto);
petPluto.age = 5;
petPluto.breed = "husky";
console.log("After: ", petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
