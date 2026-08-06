let allproducts = document.querySelector(".products")
let cartproduct = JSON.parse(localStorage.getItem("productsInCart")) || []
let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")


if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}

if (cartproduct.length > 0) {
    
    drawItems()
} else {
    showEmpty()
}
function drawItems(){
    let x = cartproduct.map((item)=>{
    return `<div class="product">
            <img src="${item.imgurl}">
            <div class="product-des">
                <h2>${item.title}</h2>
                <p>${item.color}</p>
            </div>
            <div class="product-act">
                <button class="remove-cart bg-blue-200" onclick="removeFromCart(${item.id})">remove</button>
                <i class="fa-regular fa-heart fav"></i>
            </div>
        </div>`})
    allproducts.innerHTML = x.join("");
    }

function removeFromCart(id) {
    cartproduct = cartproduct.filter((item) => item.id !== id)
    localStorage.setItem("productsInCart", JSON.stringify(cartproduct))
    if (cartproduct.length > 0) {
        drawItems()
    } else {
        allproducts.innerHTML = ""
        showEmpty()
    }
}
function showEmpty() {
    let isempty = document.querySelector(".sec-cart")
    isempty.innerHTML=`<h1>tha cart is empty</h1>`
    let section = document.querySelector(".sec-cart")
    section.style.display = "block"
}