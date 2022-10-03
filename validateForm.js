const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const phone = document.querySelector("#user-tel");
const email = document.querySelector("#user-email");
const form = document.querySelector("#subscribe-form");
const submitBtn = document.querySelector("#submit-subscription");

const testEmail = e => {};

const validateForm = () => {
  firstName.addEventListener("change", () => {});
  lastName.addEventListener("change", () => {});
  email.addEventListener("change", testEmail);

  firstName.addEventListener("invalid", () => {});
  lastName.addEventListener("invalid", () => {});
  email.addEventListener("invalid", () => {});

  phone.addEventListener("input", () => {});
};

export { validateForm };
