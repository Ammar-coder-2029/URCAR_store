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
        id:1,
        title:"Backpack",
        imgurl:"imges/Leather-Backpack2.jpg",
        color:"gray"
    },
    {
        id:2,
        title:"Runnig shoes",
        imgurl:"imges/Running-Shoes.jpg",
        color:"black and white"
    },
    {
        id:3,
        title:"smart watch",
        imgurl:"imges/Smart-Watches.jpg",
        color:"dark gray"
    },
    {
        id:4,
        title:"sunglasses",
        imgurl:"imges/Vintage-Sunglasses.jpg",
        color:"black"
    },
]

function drawItems(){
    let x = products.map((item)=>{
    return `<div class="product">
            <img src="${item.imgurl}">
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