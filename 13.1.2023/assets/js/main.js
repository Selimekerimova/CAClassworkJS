let tbody = document.querySelector("tbody");
const BASE_URL = ` http://localhost:8080`;

async function getData() {
  const res = await axios(`${BASE_URL}/users`);
  drawTable(res.data);
}

getData();

function drawTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
            <td>${element.id}</td>
            <td><img src="${element.userphoto}"/></td>
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.email}</td>
            <td>${element.date}</td>
            <td>
            <button class="btn btn-success" onclick=editById("${element.id}",this)>edit</button>
            <button class="btn btn-danger" onclick=deleteById("${element.id}",this)>delete</button>
            <button class="btn btn-primary" onclick=addFavoriById(${element.id},this)>add fav</button>
            </td>
            
            `;
    tbody.append(trElem);
  });
}

async function deleteById(id) {
  if (confirm("silmek istediyinz")) {
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}

// async function editById(id) {}

const fav = JSON.parse(localStorage.getItem("fav")) || [];
async function addFavoriById(id) {
  let res = await axios(`${BASE_URL}/users/${id}`);
  console.log(res.data);

  let obj = fav.find((item) => item.id === id);
  console.log(obj);
  if (!obj) {
    fav.push(res.data);
    localStorage.setItem("fav", JSON.stringify(fav));
    window.location = "fav.html";
  } else {
    alert("var");
  }
}
