let cards=document.querySelector(".cards-detail")
const BASE_URL=`http://localhost:8080/product`;
let id=new URLSearchParams(window.location.search).get("id")
// console.log(id);


async function getAllData(){
    let res=await axios(`${BASE_URL}`)
    // console.log(res.data);
    drawCards(res.data)
}
getAllData()

function drawCards(arr){
    arr.forEach(element => {
        if(element.id==id){
cards.innerHTML+=`
<div class="card-detail">
<img src="${element.imgUrl}" />
<div class="right">
<p>Price:${element.price}</p>
<p>Title:${element.title}</p>
<p>Description:${element.description}</p>
</div>
</div>
`
        }

    });
}