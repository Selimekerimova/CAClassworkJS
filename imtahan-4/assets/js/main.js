const menuContent = document.querySelector(".content");
const breakFast = document.querySelector(".breakFast");
const Brunch = document.querySelector(".Brunch");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");

const BASE_URL = `http://localhost:8080/menu`;
let menuArr;

// swipper js
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

async function getAllData() {
  let res = await axios(`${BASE_URL}`);
  // console.log(res.data);
  menuArr = [...res.data];

  drawMenu(res.data);
}
getAllData();

function drawMenu(data) {
  menuContent.innerHTML = "";
  data.forEach((element) => {
    menuContent.innerHTML += `
      
      <div class="menu-info-card">
      <h3>${element.menu}</h3>
      <div>
          <p class="desc">${element.description}</p>
          <span>................</span>
          <p>$${element.price}</p>
      </div>
  </div>
      `;
  });
}

// filter
breakFast.addEventListener("click", function () {
  let feltered = menuArr.filter((item) => item.catogy === "Breakfast");
  drawMenu(feltered);
});
Brunch.addEventListener("click", function () {
  let feltered = menuArr.filter((item) => item.catogy === "Brunch");
  drawMenu(feltered);
});
lunch.addEventListener("click", function () {
  let feltered = menuArr.filter((item) => item.catogy === "Lunch");
  drawMenu(feltered);
});
dinner.addEventListener("click", function () {
  let feltered = menuArr.filter((item) => item.catogy === "Dinner");
  drawMenu(feltered);
});
