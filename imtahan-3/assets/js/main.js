const products=document.querySelector(".products");


const BASE_URL=`http://localhost:8080/product`;

async function getAllData(){
    let res=await axios(`${BASE_URL}`)
    console.log(res.data);
    drawCards(res.data)
}
getAllData()


function drawCards(data){
    products.innerHTML=""
data.forEach(element => {
    products.innerHTML+=`
    <div class="product-card">
                <img
                  src="${element.imgUrl}"
                  alt="img"
                />
                <h3>${element.title}</h3>
                <div><span>${element.price}</span> <span>29</span></div>
                <p>${element.description}</p>
                <div class="buttons">
                  <button class="bg-black">Cart</button>
                  <a href="details.html?id=${element.id}" class="bg">View a</a>
                </div>
              </div>
    `
});
}
