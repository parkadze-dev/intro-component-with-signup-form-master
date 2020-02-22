var form = document.getElementById("signUpForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function validateForm() {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("emailField").value;
  var password = document.getElementById("pass").value;

  document.getElementById("fName").style.border =
    "1px solid rgba(0, 0, 0, 0.12)";
  document.getElementById("fName-alert").style.visibility = "hidden";
  document.getElementById("fName-alert-text").innerHTML = "";

  document.getElementById("lName").style.border =
    "1px solid rgba(0, 0, 0, 0.12)";
  document.getElementById("lName-alert").style.visibility = "hidden";
  document.getElementById("lName-alert-text").innerHTML = "";

  document.getElementById("emailField").style.border =
    "1px solid rgba(0, 0, 0, 0.12)";
  document.getElementById("email-alert").style.visibility = "hidden";
  document.getElementById("email-alert-text").innerHTML = "";

  document.getElementById("pass").style.border =
    "1px solid rgba(0, 0, 0, 0.12)";
  document.getElementById("password-alert").style.visibility = "hidden";
  document.getElementById("password-alert-text").innerHTML = "";

  // Validate name
  if (fName == "") {
    document.getElementById("fName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("fName-alert").style.visibility = "inherit";
    document.getElementById("fName-alert-text").innerHTML =
      "First name cannot be empty";
  }

  if (lName == "") {
    document.getElementById("lName").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("lName-alert").style.visibility = "inherit";
    document.getElementById("lName-alert-text").innerHTML =
      "Last name cannot be empty";
  }

  if (email == "") {
    document.getElementById("emailField").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("email-alert").style.visibility = "inherit";
    document.getElementById("email-alert-text").innerHTML =
      "Last name cannot be empty";
  }

  if (validateEmail(email) != true) {
    document.getElementById("emailField").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("email-alert").style.visibility = "inherit";
    document.getElementById("email-alert-text").innerHTML =
      "Looks like this is not an email";
  }

  if (password == "") {
    document.getElementById("pass").style.border =
      "2px solid hsl(0, 100%, 74%)";
    document.getElementById("password-alert").style.visibility = "inherit";
    document.getElementById("password-alert-text").innerHTML =
      "Last name cannot be empty";
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  console.log(re.test(String(email).toLowerCase()));
}
