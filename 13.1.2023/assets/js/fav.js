let row = document.querySelector(".row");
const BASE_URL = ` http://localhost:8080`;

const fav = JSON.parse(localStorage.getItem("fav")) || [];

function drawCard(arr) {
    row.innerHTML=''
  arr.forEach((element) => {
    row.innerHTML += `<div class="card" style="width: 18rem;">
       <img src="${element.userphoto}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${element.name}</h5>
         <h5 class="card-title">${element.surname}</h5>
         <p class="card-text">${element.email}</p>
         <button class="btn btn-danger" onclick=deleteById(${element.id},this)>delete</button>
       </div>
     </div>`;
  });
}
async function deleteById(id) {
    if (confirm("silmek istediyinz")) {
      await axios.delete(`${BASE_URL}/users/${id}`);
      localStorage.setItem("fav", JSON.stringify(fav));
    }}  
drawCard(fav);