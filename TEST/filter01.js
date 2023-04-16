let array = [3, 5, 11, 0, 9, 'string'];

// solution 1
let a = array.filter((value) => value < 6)
console.log(a) // [ 3, 5, 0 ]

// solution 2
function less10(value) {
    return value < 10
}

let result = array.filter(less10)
console.log(result) // [ 3, 5, 0, 9 ]