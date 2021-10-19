function fun(num) {
    if (num <= 1) {
        return num
    } else {
        return fun(num-1) + fun(num-2)
    }
}

console.log(fun(7))