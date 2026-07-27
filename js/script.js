let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")


if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}