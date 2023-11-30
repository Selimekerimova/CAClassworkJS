// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.
let count = 1;
let countInterval = setInterval(() => {
  //  console.log( count++)
}, 1000);

setTimeout(() => {
  clearTimeout(countInterval);
}, 4000);

//--------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.
let button = document.querySelector(".button");
let text = document.querySelector(".text");
button.addEventListener("click", function () {
  text.innerHTML = "i am hacker";
  text.style.fontSize = "4rem";
  text.style.color = "blue";
});

// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.
let arr = document.querySelectorAll(".card");
arr.forEach((item) => {
  item.innerText;
});

// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER
let str = "developer";
let i = 1;
let setInt = setInterval(() => {
  if (i <= str.length) {
    str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
    i++;
    // console.log(str);
  } else {
    clearInterval(setInt);
  }
}, 1000);
 

let array=['blue','red','green','black']
let btnBgc=document.querySelector('.buttonBgc')

btnBgc.addEventListener('click', function(){
    document.body.style.backgroundColor=array[Math.floor(Math.random()*array.length)]
})