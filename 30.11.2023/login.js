let form = document.querySelector(".form");
let formElem = document.createElement("form");
let inpElemEmail = document.createElement("input");
let inpElemPassword = document.createElement("input");
let btnSubmit = document.createElement("button");
let h1Elem = document.createElement("h1");

formElem.append(h1Elem, inpElemEmail, inpElemPassword, btnSubmit);
form.append(formElem);
btnSubmit.innerText = "Submit";

formElem.classList.add("formElem");
inpElemEmail.classList.add("email");
inpElemPassword.classList.add("password");
btnSubmit.classList.add("btnSubmit");
h1Elem.classList.add("title");
h1Elem.innerText = "Login Form";


