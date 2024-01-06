let tbody=document.querySelector("tbody")


let allProduct=getProductToLocalStorage()??[];


function drawBasket(arr){
    tbody.innerHTML=""
    arr.forEach(element => {
        let trElem=document.createElement("tr")
        trElem.innerHTML=`
        <td><img src="${element.product.thumbnail}"></td>
        <td>${element.product.title}</td>
        <td>${element.product.price}</td>
        <td>${element.product.count}</td>
        <td>${element.count*element.product.price}</td>
       <td><button>DELETE</button></td>
        `
        tbody.append(trElem)
    });
}
drawBasket(allProduct)
function setProductToLocalStorage(arr){
    localStorage.setItem('allProduct',JSON.stringify(arr))
  }
  function getProductToLocalStorage(){
    return JSON.parse(localStorage.getItem('allProduct'))
  }