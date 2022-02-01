const menuButton = document.getElementById("svg-button")
const nav = document.querySelector("#navigation")
const header = document.querySelector("header")

menuButton.addEventListener("click",()=>{
    nav.classList.toggle("open")
    console.log(nav.classList)
    if (nav.classList.contains("open")) {
        nav.style.top = header.getBoundingClientRect().height+"px"
    }else{
        nav.style.top = 100+"%"
    }
})