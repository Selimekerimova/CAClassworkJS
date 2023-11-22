let startBtn = document.querySelector(".start");
let result = document.querySelector(".result");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let incrementInp = document.querySelector("#increment");
let decrementInp = document.querySelector("#decrement");
let incBtn = document.querySelector(".inc-btn");
let decBtn = document.querySelector(".dec-btn");


let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
});

resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

increment.addEventListener("click", function () {
  result.innerText = ++count;
});
decrement.addEventListener("click", function () {
  result.innerText = --count;
});


incBtn.addEventListener("click", function () {
  count += +incrementInp.value;
  result.innerText = count;
});

decBtn.addEventListener("click", function () {
  count -= +decrementInp.value;
  result.innerText = count;
});
