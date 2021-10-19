const array = [1, 2, 3, 4,5,6,7,8,9]

average = array.reduce(function (accumulator, element){
    return accumulator += element
})

console.log(average/array.length)