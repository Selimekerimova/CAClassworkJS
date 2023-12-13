let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

const id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = ` http://localhost:8080`;

async function fillForm() {
  let res = await axios(`${BASE_URL}/users/${id}`);
  (allInputs[0].value = res.data.name),
    (allInputs[1].value = res.data.surname),
    (allInputs[2].value = res.data.email);
  
}

if (id) {
  fillForm();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let date=new Date();

  let user = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
    email: allInputs[2].value,
    date:date.toLocaleString(),
    photo: `./assets/img/${inputsAll[3].value.split("\\")[2]}`,
  };

  if (!id) {
axios.post(`${BASE_URL}/users/`,user)
  }
  else{
    axios.patch(`${BASE_URL}/users/${id}`,user)
  }
});
