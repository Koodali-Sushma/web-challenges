console.clear();

const form = document.querySelector('[data-js="form"]');
const successMessage = document.querySelector('[data-js="success"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
  successMessage.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
  successMessage.removeAttribute("hidden");
}
hideTosError(); //By default hiding the error message

////  hide error message once checkbox selected
tosCheckbox.addEventListener("change", () => {
  if (!tosCheckbox.checked) showTosError();
  else hideTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) showTosError();
  else hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
