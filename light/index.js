const on_btn = document.querySelector(".on")
const off_btn = document.querySelector(".off")

const body = document.body

let change_color = false

on_btn.addEventListener("click", function () {
    change_color = true
    body.style.backgroundColor = "wheat"
})

off_btn.addEventListener("click", function () {
    change_color = false
    body.style.backgroundColor = "white"
})