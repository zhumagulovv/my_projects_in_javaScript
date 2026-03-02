const form = document.querySelector(".form")
const inputs = document.querySelectorAll("input")
const result_summary = document.querySelector(".result_summary")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const weekly_expenses_summary = []

    inputs.forEach((input) => {
        if (Number(input.value) === 0) {
            alert("Is empty")
        } else {
            weekly_expenses_summary.push(Number(input.value))
            input.value = ""
        }
    })

    const total = weekly_expenses_summary.reduce((sum, value) => sum + value, 0)

    const average = total / weekly_expenses_summary.length

    result_summary.innerHTML = `
        <p>Total: <strong>${total} som</strong></p>
        <p>Average per day: <strong>${average.toFixed(2)} som</strong></p>
    `
})