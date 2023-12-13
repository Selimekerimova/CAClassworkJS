let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

const BASE_URL = ` http://localhost:8080`;

async function getData() {
  const res = await axios(`${BASE_URL}/users`);
  drawTable(res.data);
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: allInputs[0].value,
    lastName: allInputs[1].value,
    email: allInputs[2].value,
  };

});