const info_name = document.querySelector(".name")
const age = document.querySelector(".age")
const city = document.querySelector(".city")

const btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    info_name.textContent = "Zhumagulov Zhakyp"
    age.textContent = "99 years old"
    city.textContent = "Bishkek"
})