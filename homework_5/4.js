const obj = {
    name: "name",
    num1: 10,
    surname: "surname",
    num2: 34,
    num3: 35,
    num4: 34
}
let sum
sum = Object.values(obj)
let gl = 0
for (let elem of sum) {
    if(typeof elem === "number") gl += elem
}

console.log(gl)