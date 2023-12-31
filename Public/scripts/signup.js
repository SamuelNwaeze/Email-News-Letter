//@ts-ignore
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailAddress");
const form = document.getElementById("form");

//@ts-ignore
form.addEventListener("submit", (valid) => {
  // Regular expression for validating email format
  const emailFormat = /^\S+@\S+\.\S+$/;

  if (firstName.value.trim() === "") {
    alert("Please enter your first name");
    valid.preventDefault();
  }

  if (lastName.value.trim() === "") {
    alert("Please enter your last name");
    valid.preventDefault();
  }

  if (email.value.trim() === "") {
    alert("Please enter your email");
    valid.preventDefault();
  } else if (!emailFormat.test(email.value)) {
    alert("Please enter a valid email address");
    valid.preventDefault();
  }

  return false;
});
