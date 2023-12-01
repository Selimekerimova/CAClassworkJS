let arr = JSON.parse(localStorage.getItem("arr")) || [];

$(".add").on("click", function () {

    let pElem=document.createElement('p')
    pElem.innerText = $("#inp").val();
    arr.push(pElem.innerText);

    localStorage.setItem("arr", JSON.stringify(arr));
    $('.element').append(pElem);
    $("#inp").val("")

    pElem.onclick = function () {
      this.remove();
    };

});
function forArr(array) {
  array.forEach((element) => {
    let pElem = document.createElement("p");
    pElem.textContent = element;
    $(".element").append(pElem);
    pElem.onclick = function () {
      this.remove();
    };
  });
}

forArr(arr)