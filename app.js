const signUpForm = document.getElementById("signUpForm");
const emailField = document.getElementById("emailField");
const confirmBtn = document.getElementById("confirmBtn");

emailField.addEventListener("keyup", function(event) {
  isValidEmail = emailField.checkValidity();

  if (isValidEmail) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});

okButton.addEventListener("click", function(event) {
  signUpForm.submit();
});
