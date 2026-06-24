console.clear();

const form = document.querySelector('[data-js="form"]');
const successMessage = document.querySelector('[data-js="success"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const firstName = document.querySelector('[data-js="firstName"]');

//.hide checkbox error message and success message
hideTosError();
hideSuccess();

function showSuccess() {
  successMessage.removeAttribute("hidden");
}
function hideSuccess() {
  successMessage.setAttribute("hidden", "");
}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    hideSuccess();
    showTosError();
  } else {
    hideTosError();
    showSuccess();
  }
  alert("Form submitted");
  event.target.reset();
  firstName.focus();
});

////  hide error message once checkbox selected
tosCheckbox.addEventListener("change", () => {
  if (!tosCheckbox.checked) {
    hideSuccess();
    showTosError();
  } else {
    showSuccess();
    hideTosError();
  }
});
