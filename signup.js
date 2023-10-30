const form = document.getElementsByClassName("form");

const firstName = document.getElementsByClassName("firstName");

const lastName = document.getElementsByClassName("lastName");

const email = document.getElementsByClassName("email");

form.addEventListener("submit", (e) => {
  console.log(firstName.value);

  console.log(lastName.value);

  console.log(email.value);

  e.preventDefault();

  if (
    firstName.value.trim() == "" ||
    lastName.value.trim() == "" ||
    email.value.trim() == ""
  ) {
    return false;
  } else {
    true;
  }
});
