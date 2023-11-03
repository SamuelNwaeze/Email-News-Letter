const subscribeButton = document.getElementsByid("subscribeButton")[0];
const subscribeText = document.getElementsByid("subscribeText")[0];

subscribeButton.addEventListener("click", (NewPage) => {
  const signupPage = "signup.html";

  window.location.href = signupPage;
});

subscribeText.addEventListener("click", (NewPage) => {
  const signupPage = "signup.html";

  window.location.href = signupPage;
});
