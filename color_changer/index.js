const buttons = document.querySelectorAll("button")
const block = document.querySelector(".block")

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const color = button.dataset.color
        block.style.backgroundColor = color
    })
})