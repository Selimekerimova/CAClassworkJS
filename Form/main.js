let password = document.querySelector("#password");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let submit = document.querySelector("#submit");
let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault()
  let user = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  console.log(user);
});
