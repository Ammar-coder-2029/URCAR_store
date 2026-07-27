let userinfo = document.querySelector("#user_info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")


if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "block"
    user.innerHTML = localStorage.getItem("username")
}