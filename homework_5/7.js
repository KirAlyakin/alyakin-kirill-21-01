let array = ["Буква", 12, {"Ключ":"2"}]

console.log(array)

let numbers = []
let strings = []
let objects = []

for (let elem of array) {
    if(typeof elem === "number"){
        numbers.push(elem);
    }
    else if (typeof elem === "string"){
        strings.push(elem);
    }
    else{
        objects.push(elem);
    }
}

let object = {
    numbers,
    strings,
    objects
}

console.log(object)