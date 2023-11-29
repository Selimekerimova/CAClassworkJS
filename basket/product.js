import { products } from "./data";
let productsList = document.querySelector(".product");
let allProducts = JSON.parse;
console.log(products);
function drawCard(data) {
  allProducts.innerHTML = "";
  data.forEach((element) => {
    allProducts.innerHTML = `
    <div class="col col-12 col-md-6 col-lg-4">
            <div class="card" style="width: 18rem">
                <img src="${
                  element.thumbnail
                }" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <h5 class="card-title">Price:${element.price}</h5>
                  <p class="card-text">
                   ${element.description.slice(0, 100)}...
                  </p>
                  <div class=" d-flex justify-content-between align-items-center">
                  <button href="#" class="btn btn-primary" onclick=addToBasket("${
                    element._id
                  }"
                  Add to Basket
                  </button>
                  </div>
                </div>
              </div>
        </div>
    `;
  });
}
drawCard(basket);