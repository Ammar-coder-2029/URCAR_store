let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}
let logout = document.querySelector("#logout")
logout.addEventListener("click", logoutbtn)
function logoutbtn(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    },500)
}
let allproducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: "JETOUR",
        imgurl: "imges/grayJETOUR.jpg",
        color: "gray",
        qty: 1
    },
    {
        id: 2,
        title: "Ferrai",
        imgurl: "imges/blackFERARI.jpg",
        color: "black",
        qty: 1
    },
    {
        id: 3,
        title: "Lampo",
        imgurl: "imges/blueLAMPORGINE.jpg",
        color: "blue",
        qty: 1
    },
    {
        id: 4,
        title: "Porsche",
        imgurl: "imges/greenPorsche.jpg",
        color: "green",
        qty: 1
    },
    {
        id: 5,
        title: "Backpack",
        imgurl: "imges/Leather-Backpack2.jpg",
        color: "gray",
        qty: 1
    },
    {
        id: 6,
        title: "Runnig shoes",
        imgurl: "imges/Running-Shoes.jpg",
        color: "black and white",
        qty: 1
    },
    {
        id: 7,
        title: "smart watch",
        imgurl: "imges/Smart-Watches.jpg",
        color: "dark gray",
        qty: 1
    },
    {
        id: 8,
        title: "sunglasses",
        imgurl: "imges/Vintage-Sunglasses.jpg",
        color: "black",
        qty: 1
    },
    {
        id: 9,
        title: "Backpack",
        imgurl: "imges/Leather-Backpack2.jpg",
        color: "gray",
        qty: 1
    },
    {
        id: 10,
        title: "Runnig shoes",
        imgurl: "imges/Running-Shoes.jpg",
        color: "black and white",
        qty: 1
    },
    {
        id: 11,
        title: "smart watch",
        imgurl: "imges/Smart-Watches.jpg",
        color: "dark gray",
        qty: 1
    },
    {
        id: 12,
        title: "sunglasses",
        imgurl: "imges/Vintage-Sunglasses.jpg",
        color: "black",
        qty: 1
    }
];
function drawItems(){
    let x = products.map((item)=>{
    return `<div class="product relative">
            <div class="product-img-container">
                <img class="img-normal" src="${item.imgurl}">
                <img class="img-blured" src="${item.imgurl}">
            </div>
            <div class="product-des">
                <h2>${item.title}</h2>
                <p>${item.color}</p>
            </div>
            <div class="product-act">
                <button class="add-cart bg-blue-200" onclick="check(${item.id})">add</button>
                <i class="fa-regular fa-heart fav"></i>
            </div>
        </div>`})
    allproducts.innerHTML = x.join("");
}
drawItems()

let addprod = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let countProd = document.querySelector("#count-prod")
let cartsProductDiv = document.querySelector(".cart-prods")
function check(id){
    if (localStorage.getItem("username")) {
        let checkProduct = products.find((item) => item.id === id)
        addprod= [...addprod,checkProduct] 
        localStorage.setItem("productsInCart",JSON.stringify(addprod))
        countProd.innerHTML = addprod.length
        cartsProductDiv.innerHTML += `<p>${checkProduct.title}</p>`
    }else{
        setTimeout(()=>{
            window.location = "register.html"
        },500)
    }
}
if (addprod) {
    addprod.map(item =>
        cartsProductDiv.innerHTML += `<p>${item.title}</p>`
    )
    countProd.innerHTML = addprod.length
}
let CarIcon = document.querySelector(".li-cart");
let CartProducts = document.querySelector(".carts-prod");
CarIcon.addEventListener("click", showen_list);
function showen_list() {
    if (CartProducts.style.display === "block") {
        CartProducts.style.display = "none";
    } else {
        CartProducts.style.display = "block";
    }
}

function count() {
    
}