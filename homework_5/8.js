const array = [1,2,5,7, 10,11, 30]

function fun(array, min, max) {
    return array.filter(elem => ((elem >= min && elem <=max)||(elem <= max && elem >= min)))
}

console.log(fun(array, 4, 20))