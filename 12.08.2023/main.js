let tbody = document.querySelector("tbody");
let search = document.querySelector(".search");
let spinner = document.querySelector(".loading");
const BASE_URL = `http://universities.hipolabs.com/search?country=Azerbaijan`;

async function getAllData() {
  try {
    spinner.style.display = "flex";
    spinner.style.justifyContent = "center";
    const response = await axios(`${BASE_URL}`);

    console.log(response);
    drawCard(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    spinner.style.display = "none";
  }
}
getAllData();
function drawCard(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains}</td>
    <td>${element.web_pages}</td>
     </tr>
    `;
    tbody.append(trElem);
  });
}

search.addEventListener("input", async function (e) {
  spinner.style.display = "flex";
  spinner.style.justifyContent = "center";
  const response = await axios(`${BASE_URL}&name=${e.target.value}`);
  console.log(response.data);
  drawCard(response.data);
  spinner.style.display = "none";
});
