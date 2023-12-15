let row = document.querySelector(".row");
let modeBtn = document.querySelector(".mode");
let searchBtn = document.querySelector(".search");
let select = document.querySelector(".select");
let body = document.querySelector("body");
let div = document.querySelector(".main");

console.log(searchBtn);
const BASE_URL = `https://restcountries.com/v2/all`;

async function getAllData() {
  let res = await axios(`${BASE_URL}`);
  // console.log(res.data);
  drawCard(res.data);
}
getAllData();

function drawCard(arr) {
  arr.forEach((element) => {
    row.innerHTML += `
        <div class="card col-12 col-6 col-3">
          <img src="${element.flag}" alt="" />
          <h4>${element.name}</h4>
          <h4>Population: <span>${element.population}</span></h4>
          <h4>Region: <span>${element.region}</span></h4>
          <h4>Capital: <span>${element.capital}</span></h4>
        </div>`;
  });
}

searchBtn.addEventListener("input", async function (e) {
  let res = await axios(`${BASE_URL}`);
  row.innerHTML = "";
  let filtered = res.data.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawCard(filtered);
  console.log(filtered);
});

select.addEventListener("change", async function (e) {
  row.innerHTML = "";
  let res = await axios(`https://restcountries.com/v2/region/${e.target.value}`);

  let filtered = res.data.filter((item) =>
    item.region.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawCard(filtered);
});

modeBtn.addEventListener("click",function(){
body.classList.toggle("darkk")
localStorage.setItem('mode',body.classList)
})
if(localStorage.getItem('mode')!=''){
    document.body.classList.add(localStorage.getItem('mode'))
}