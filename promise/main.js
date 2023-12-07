const BASE_URL = `https://northwind.vercel.app/api`;
let row = document.querySelector(".customers");
fetch(`${BASE_URL}/customers`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => drawCard(data))
  .catch((err) => console.log(err));

function drawCard(array) {
  row.innerHTML = "";
  array.forEach((element) => {
    row.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 my-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${element.companyName}</h5>
              <p class="card-text">
               ${element.contactTitle}
              </p>
              
              <button href="#" class="btn btn-primary" onclick=deleteById("${element.id}",this)>Delete</button>
            </div>
          </div>
        </div>`;
  });
}

// function deleteById(id) {
//   fetch(`${BASE_URL}/customers/${id}`, {
//     method: "DELETE",
//   }).then(() => {
//     fetch(`${BASE_URL}/customers`)
//       .then((res) => res.json())
//       .then((data) => drawCard(data));
//   });
// }

function deleteById(id, btn) {
  if (confirm("are you sore delete")) {
    fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
    });
    btn.closest(".col-12").remove();
  }
}
