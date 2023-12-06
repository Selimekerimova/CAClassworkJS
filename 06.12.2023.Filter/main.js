let electBtn = document.querySelector(".elect");
let jeweleryBtn = document.querySelector(".jewelery");
let mensBtn = document.querySelector(".men");
let womenBtn = document.querySelector(".women");
let col = document.querySelector(".col-12");
const BASE_URL = `https://fakestoreapi.com/products`;

electBtn.addEventListener("click", function () {
  getData("/category/electronics")
});

jeweleryBtn.addEventListener("click", function () {
    getData("/category/jewelery")
});
mensBtn.addEventListener('click',function(){
    getData("/category/men's clothing")
})
womenBtn.addEventListener('click',function(){
    getData("/category/women's clothing")
})
function drawCards(data) {
  col.innerHTML = "";
  data.forEach((element) => {
    col.innerHTML += `
    <a href="./details.html" ?id=${element.id}><div class="card" style="width: 18rem;">
    <img src="${element.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p>${element.price}</p>
    </div>
  </div></a>`;
  });
}

async function getData(endpoint) {
  try {
    let response = await axios(`${BASE_URL}/${endpoint}`);
    drawCards(response.data)
  } catch (error) {
    console.log(error);
  }
}
getData("")