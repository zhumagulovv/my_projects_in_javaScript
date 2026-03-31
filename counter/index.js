const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const countText = document.querySelector(".count")


function createCounter() {
    let count = 0

    return {
        increment: function () {
            count++
            return count
        },

        decrement: function () {
            if (count > 0) {
                count--
                return count
            }
            return count
        },

        getCount: function () {
            return count
        }
    }
}

let counter = createCounter()

plus.onclick = () => {
    countText.textContent = counter.increment()
}

minus.onclick = () => {
    countText.textContent = counter.decrement()
}