function sumInArray(arr) {
    return arr.reduce((acc, cur) => cur + acc, 0)
}

let numbers = [20, 30, 40, 50, 60]

console.log(sumInArray(numbers))
