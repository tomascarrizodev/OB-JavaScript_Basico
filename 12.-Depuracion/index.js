function fibonacci (num) {
    let arr = []
    if (num === 1) { arr = [1] }
    if (num === 2) { arr = [1, 1] }
    if (num > 2) {
        arr = [1, 1]
        for (let i = 0; arr.length < num ; i++) {
            arr = [...arr, arr[i] + arr[i + 1]]
        }
    }
    return arr
}

const arrayFibonacci = fibonacci(12)