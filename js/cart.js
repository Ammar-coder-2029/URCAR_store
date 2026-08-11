let allproducts = document.querySelector(".products");
let cartproduct = JSON.parse(localStorage.getItem("productsInCart")) || [];
let userinfo = document.querySelector("#user-info");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let badgeCount = document.querySelector("#count-prod"); 

if (localStorage.getItem("username")) {
    if(links) links.remove();
    if(userinfo) userinfo.style.display = "flex";
    if(user) user.innerHTML = localStorage.getItem("username");
}
if (cartproduct.length > 0) {
    drawItems();
} else {
    showEmpty();
}
function drawItems() {
    let x = cartproduct.map((item) => {
        return `
        <div class="product relative">
            <div class="product-img-container">
                <img class="img-normal" src="${item.imgurl}">
                <img class="img-blured" src="${item.imgurl}">
            </div>
            <div class="product-des">
                <h2>${item.title}</h2>
                <p>${item.color}</p>
            </div>
            <div class="product-act">
                <button class="remove-cart bg-blue-200" onclick="removeFromCart(${item.id})">remove</button>
                <span class="itemsNum font-bold text-lg">${item.qty}</span> 
            </div>
        </div>`;
    });
    allproducts.innerHTML = x.join("");
}

function removeFromCart(id) {
    cartproduct = cartproduct.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(cartproduct));
    if (cartproduct.length > 0) {
        drawItems();
    } else {
        allproducts.innerHTML = "";
        showEmpty();
    }
}

function showEmpty() {
    let isempty = document.querySelector(".sec-cart");
    if(isempty) {
        isempty.innerHTML = `<h1 style="font-size: 25px; font-family:fantasy;">The cart is empty</h1>`;
        isempty.style.display = "block";
    }
}