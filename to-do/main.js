let inpt = document.querySelector("#add");
let list = document.querySelector(".list");
let addBtn = document.querySelector(".add-todo");

addBtn.addEventListener("click", function () {
  let spanElem = document.createElement("span");
  let liElem = document.createElement("li");
  let btnElem = document.createElement("button");
  spanElem.innerText = inpt.value;
  btnElem.innerText = "Delete";
  liElem.append(spanElem, btnElem);
  list.append(liElem);
  inpt.value = "";
  btnElem.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
