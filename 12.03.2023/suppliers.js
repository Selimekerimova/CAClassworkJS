let cards = document.querySelector(".cards");
let boxs = document.querySelector(".boxs");
const BASE_URL = `http://localhost:3000`;


async function getAllData(endpoint) {
  const res = await axios(`${BASE_URL}/${endpoint}`);
  drawCard(res.data);
}
getAllData("blogs");

function drawCard(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
   <h2 class="title">${element.title}</h2>
   <h3 class="description">${element.body} </h3>
   <h4>${element.author}</h4>
   <div class="btns">
       <a>
       <button class="delete btn" onclick=deleteData(${element.id},this)>Delete</button>
       </a>
       <a>
       <button class="edit btn">Edit</button>
       </a>
    </div>
    `;
    boxs.append(cards);
  });
}

async function deleteData(id, thisBtn) {
  if (confirm("Aru you sure")) {
    thisBtn.closest(".card").remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}
