
const allInputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const addBtn = document.querySelector(".add");
const tbody = document.querySelector("tbody");
const sortBtn = document.querySelector(".sortBtn");
const searchInp = document.querySelector(".search");
const BASE_URL = `http://localhost:8080/product`;

let productData;
let copyProductData;


//  all data
async function getAllData() {
  try {
    let res = await axios(`${BASE_URL}`);
    productData = res.data;
    copyProductData = [...res.data];
    drawTable(res.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();

// form
// post
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    image: allInputs[0].value,
    title: allInputs[1].value,
    price: allInputs[2].value,
    description: allInputs[3].value,
    id: allInputs[4].value,
  };

  try {
    if (allInputs[1].value && allInputs[2].value && allInputs[3].value) {
      await axios.post(`${BASE_URL}`, obj);
    } else {
      document.querySelector(".error").style.display = "flex";
    }
  } catch (error) {
    console.log(error);
  }
});

// table
function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td><img src="${element.imgUrl}"/></td>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td>${element.description}</td>
        <td>
        <button class="delete" onclick=deleteProduct("${element.id}",this)>Delete</button>
        </td>
        </tr>

        `;
  });
}

// delete

async function deleteProduct(id, btn) {
  try {
    if (confirm("Are you sure")) {
      await axios.delete(`${BASE_URL}/${id}`);
      btn.closest("tr").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

// sort
sortBtn.addEventListener("click", function sortPrice() {
  console.log();
  let sorted;
  if (sortBtn.innerText === "Asc") {
    this.innerText = "Des";
    sorted = productData.sort((a, b) => a.id - b.id);
  } else if (sortBtn.innerText === "Des") {
    this.innerText = "Asc";
    sorted = productData.sort((a, b) => b.id - a.id);
  } else if (sortBtn.innerText === "Asc") {
    sorted = copyProductData;
  }

  drawTable(sorted);
});

// search
searchInp.addEventListener("input", function (e) {
  let feltered = productData.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(feltered);
});
