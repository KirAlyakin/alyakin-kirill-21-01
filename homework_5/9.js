function fun(a, b) {
    if (a.length === b.length) {
        return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')
    }
}

const str1 = 'ПриВет'
const str2 = 'теВирп'

console.log(fun(str1,str2))
