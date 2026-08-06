let allproducts = document.querySelector(".products")
let cartproduct = JSON.parse(localStorage.getItem("productsInCart"))

if (cartproduct) {
    function drawItems(){
    let x = cartproduct.map((item)=>{
    return `<div class="product">
            <img src="${item.imgurl}">
            <div class="product-des">
                <h2>${item.title}</h2>
                <p>${item.color}</p>
            </div>
            <div class="product-act">
                <button class="remove-cart bg-blue-200" onclick="check(${item.id})">remove</button>
                <i class="fa-regular fa-heart fav"></i>
            </div>
        </div>`})
    allproducts.innerHTML = x.join("");
    }
    drawItems()
} else {
    let isempty = document.querySelector(".sec-cart")
    isempty.innerHTML=`<h1>tha cart is empty</h1>`
    let section = document.querySelector(".sec-cart")
    section.style.display = "block"
}
let remove = document.querySelector(".remove-cart")
remove.addEventListener("click",removebtn)
function removebtn(item) {
    let checkProduct = products.find((item) => item.id === id)
    checkProduct = localStorage.remove("productsInCart")
}