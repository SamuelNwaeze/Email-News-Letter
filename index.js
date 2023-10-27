const subscribeButton = document.getElementsByClassName("subscribeButton")[0];
const subscribeText = document.getElementsByClassName("subscribeText")[0];

subscribeButton.addEventListener("click", (NewPage) => {
  const signupPage = "signup.html";

  window.location.href = signupPage;
});

subscribeText.addEventListener("click", (NewPage) => {
  const signupPage = "signup.html";

  window.location.href = signupPage;
});
