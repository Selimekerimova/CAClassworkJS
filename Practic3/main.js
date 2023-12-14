let inputElem = document.querySelector(".search");
let card = document.querySelector(".card");
let resl = document.querySelector(".resl");
let result = document.querySelector(".result");
const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

async function getAllData(str) {
  let res = await axios.get(`${BASE_URL}/${str}`);
  console.log(res.data);
  result.innerHTML = `
  <h3>${res.data[0].word}</h3>
  <div> ${res.data[0].meanings[0].definitions[0].definition}</div>
  <div>${res.data[0].meanings[0].partOfSpeech}</div>
  <i onclick=playAudio(this) class="fa-solid fa-volume-high"><audio> ${res.data[0].phonetics[0]?.audio} </audio></i>
`;
}

inputElem.addEventListener("keyup", function (e) {
    resl.value=''
  if (e.key === "Enter") {
    getAllData(inputElem.value);
  }
});

function playAudio(icon){
icon.querySelector("audio").play()
}