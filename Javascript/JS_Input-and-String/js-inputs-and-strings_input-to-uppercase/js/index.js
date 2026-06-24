console.clear();

const inputText = document.querySelector('[data-js="first-input"]');
const buttonSubmit = document.querySelector('[data-js="button-uppercase"]');
buttonSubmit.addEventListener("click", () => {
  inputText.value = inputText.value.toUpperCase();
});
