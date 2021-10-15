const first = prompt("Введите строку");
const second = prompt("Введите количество символов");
const regExp = /\D/g
const fs = first.substring(0, second);
const add = first.substring(second, first.length)
const fs2 = add.replace(regExp, '.')

alert(fs + fs2)



