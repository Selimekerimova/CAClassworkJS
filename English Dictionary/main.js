let card = document.querySelector(".card");
let inp = document.querySelector("input");
let ulElem = document.querySelector("ul");

const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

async function fecthApi(word) {
  let res = await axios(`${BASE_URL}/${word}`);
  console.log(res.data);
  ulElem.innerHTML = `
<li class="word">
<div class="details">
  <p>${res.data[0].word}</p>
  <span></span>
</div>
<i onclick=playAudio(this) class="fas fa-volume-up"><audio> ${res.data[0].phonetics[0]?.audio}</audio></i>
</li>

<div class="content">
<li class="meaning">
  <div class="details">
    <p>${res.data[0].meanings[0].definitions[0].definition}</p>
    <span>${res.data[0].meanings[0].partOfSpeech}</span>
  </div>
</li>
<li class="exaple">
  <div class="details">
    <p>Wikipedia</p>
    <span><a href="${res.data[1].sourceUrls[1]}">Link</a></span>
  </div>
</li>
<li class="snonym">
  <div class="details">
    <p>snonym</p>
    <span>${res.data[0].meanings[0].synonyms[0]} </span>
    
  </div>
</li>
</div> 
`;
}

inp.addEventListener("keyup", function (e) {
  e.preventDefault();
  ulElem.innerHTML = "";
  if (e.key === "Enter" && e.target.value) {
    // console.log(e.target.value);
    fecthApi(e.target.value);
  }
});

function playAudio(icon) {
  icon.querySelector("audio").play();
}
