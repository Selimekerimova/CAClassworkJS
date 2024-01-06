let formElem = document.querySelector(".todoForm");
let todoInput = document.querySelector("#todoInput");
let ulElem = document.querySelector("ul");
let addBtn = document.querySelector(".add");

let todoArray = getLocaleStorageTodo();
let editObj;
formElem.addEventListener("submit", function (e) {
  e.preventDefault();
  if (addBtn.innerText == "Add")
    if (todoInput.value) {
      let todoObj = {
        id: Date.now(),
        value: todoInput.value,
      };
      todoArray.push(todoObj);
      setLocaleStorageTodo(todoArray);
      drawTodo(todoArray);
      todoInput.value = "";
    } else {
      alert("fill input");
    }
  else {
    editObj.value = todoInput.value;
    addBtn.innerText = "Add";
    drawTodo(todoArray);
    setLocaleStorageTodo(todoArray);
    todoInput.value = "";
  }
});

function drawTodo(arr) {
  ulElem.innerHTML = "";
  arr.forEach((element) => {
    ulElem.innerHTML += `
    <li>
      <div class="checkDiv">
        <input type="checkbox"  />
        <span>${element.value}</span>
      </div>
      <div class="btns">
        <button class="delete" onclick=deleteTodo(${element.id})>Delete</button>
        <button class="edit" onclick=editTodo(${element.id}) >Edit</button>
      </div>
    </li>
  `;
  });
}
drawTodo(todoArray);

function deleteTodo(id) {
  todoArray = todoArray.filter((item) => item.id != id);
  drawTodo(todoArray);
  setLocaleStorageTodo(todoArray);
}

function editTodo(id) {
  console.log(id);
  addBtn.innerText = "edit";
  editObj = todoArray.find((item) => item.id == id);
  todoInput.value = editObj.value;
}

function setLocaleStorageTodo(arr) {
  localStorage.setItem("todo", JSON.stringify(arr));
}
function getLocaleStorageTodo() {
  return JSON.parse(localStorage.getItem("todo")) ?? [];
}
