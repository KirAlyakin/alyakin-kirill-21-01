let array = [1, 2, 3, 4, 1, 2]
let unique = [... new Set(array)]
unique = Array.from(unique)

console.log(array)
console.log(unique)