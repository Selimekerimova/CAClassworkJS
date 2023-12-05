let img = document.querySelector("img");

const BASE_URL = "https://dog.ceo/api/breeds/image/random";
img.src = "https://images.dog.ceo/breeds/malinois/n02105162_6942.jpg";
setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => (img.src = data?.message));
}, 1500);
