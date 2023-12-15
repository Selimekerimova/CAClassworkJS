let row = document.querySelector(".row");
const BASE_URL = `https://restcountries.com/v2/all`;
let nameValue=window.URLSearchParams(window.location.search).get("name")
async function getAllData() {
    let res = await axios(`${BASE_URL}/name/${nameValue}`);
    // console.log(res.data);
    drawCard(res.data);
  }
  getAllData();

function drawCard(arr) {
arr.forEach(element => {
       row.innerHTML += `
         <a href="./detail.html">
         <div class="card col-12 col-6 col-3">
         <img src="${element.flag}" alt="" />
         <h4>${element.name}</h4>
         <h4>Population: <span>${element.population}</span></h4>
         <h4>Region: <span>${element.region}</span></h4>
         <h4>Capital: <span>${element.capital}</span></h4>
       </div>
       </a>`;
});
   
    };
  
  