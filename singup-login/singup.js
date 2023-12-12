let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".info");

let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bool = users.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  if (!bool) {
    let obj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
      id: Date.now(),
    };

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    confirm("Bele istifadeci movcuddur");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
  window.location = "login.html";
});