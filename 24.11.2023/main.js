let word = document.querySelector(".words");
let keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.backgroundColor = "red";
      key.style.transform = "scale(1.1)";
    }
});
word.innerText+=event.key;
});
window.addEventListener("keyup", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.backgroundColor = "darkcyan";
      key.style.transform = "none";
    }
  });
});
