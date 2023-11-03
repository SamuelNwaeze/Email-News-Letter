const form = document.getElementsByid("form");

const firstName = document.getElementsByid("firstName");

const lastName = document.getElementsByid("lastName");

const email = document.getElementsByid("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fName = firstName.value;

  console.log(fName);
});
