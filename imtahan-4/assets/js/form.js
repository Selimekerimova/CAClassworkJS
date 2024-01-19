const form=document.querySelector("form")
const allInputs=document.querySelectorAll("input")
const tbody=document.querySelector("tbody")
const select=document.querySelector("select")

const BASE_URL=`http://localhost:8080/menu`
async function getAllData(){
    try {
        let res= await axios (`${BASE_URL}`)
    // console.log(res.data);
    drawTable(res.data)
    } catch (error) {
        console.log(error);
    }
}
getAllData()


function drawTable(data){
data.forEach(element => {
    tbody.innerHTML+=`
    <tr>
    <td>${element.id}</td>
    <td>${element.menu}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    <td>${element.catogy}</td>
    <td>
    <button class="delete" onclick=deleteProduct("${element.id}",this) >Delete</button>
    </td>
    
    
    </tr>
    `
});
}

// POST

form.addEventListener("submit", async function(e){
    e.preventDefault()
    let obj={
        
        menu:allInputs[0].value,
        description:allInputs[1].value,
        price:allInputs[2].value,
        catogy:select.value,
    }
    try {
        await axios.post(`${BASE_URL}`,obj)
    } catch (error) {
        console.log(error);
    }
})



// DELETE
async function deleteProduct(id,btn){
    try {
        if(confirm("Are you sure")){
            await axios.delete(`${BASE_URL}/${id}`)
        btn.closest("tr").remove()
        }
    } catch (error) {
        console.log(error);
    }
}
