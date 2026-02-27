const subjects_html = document.querySelector(".subjects")
const sort_btn = document.querySelector(".sort_btn")
const count_subject = document.querySelector(".count")

let subjects = ["Физика", "Алгебра", "География", "Геометрия", "История"]

count_subject.textContent = `Количества предметов: ${subjects.length}`

function render() {
    const subjects_map = subjects.map((s) => {
        return `
            <li class="subject">${s}</li>
        `
    })

    subjects_html.innerHTML = subjects_map.join("")
}

render()

sort_btn.addEventListener("click", function () {
    subjects.sort((a, b) => a.localeCompare(b))
    render()
})

