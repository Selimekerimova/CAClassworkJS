let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".info");
let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = users.find((item) => {
  return  item.userName === allInputs[0].value && item.password === allInputs[1].value;
  });
console.log(user);
  if(user){
    console.log("s");
    window.location="home.html"  
  }else{
    confirm("Bele istifadeci yoxdu")
  }
});
