let form = document.querySelector(".form");
let formElem = document.createElement("form");
let inpElemName = document.createElement("input");
let inpElemEmail = document.createElement("input");
let inpElemPassword = document.createElement("input");
let btnSubmit = document.createElement("button");
let h1Elem = document.createElement("h1");

formElem.append(h1Elem, inpElemName, inpElemEmail, inpElemPassword, btnSubmit);
form.append(formElem);
btnSubmit.innerText = "Submit";

formElem.classList.add("formElem");
inpElemName.classList.add("name");
inpElemEmail.classList.add("email");

inpElemPassword.classList.add("password");
btnSubmit.classList.add("btnSubmit");
h1Elem.classList.add("title");
h1Elem.innerText = "Singup Form";

let arr = [];
formElem.addEventListener("submit", function (e) {
  e.preventDefault();

if(inpElemName.value!=''|| inpElemEmail.value!=''||inpElemPassword.value!=''){
    let user = {
        email: inpElemEmail.value,
        password: inpElemPassword.value,
      };
      arr.push(user);
      localStorage.setItem("users", JSON.stringify(arr));
      JSON.parse(localStorage.getItem("users"));
      console.log(arr);
}
  document.querySelectorAll("input").forEach((item) => {
    item.value = "";
  });
  // window.location='login.html'
});
