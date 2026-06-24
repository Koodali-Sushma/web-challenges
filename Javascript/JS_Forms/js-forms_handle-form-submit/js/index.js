console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector('[data-js="firstName"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  event.target.reset();
  firstName.focus();

  //Bonus challenge
  console.log(data.age);
  console.log(data.badness);
  const sumOfAgeBadness = Number(data.age) + Number(data.badness);
  console.log(
    "The age-badness-sum of ",
    data.firstName,
    " is ",
    sumOfAgeBadness,
  );
});
