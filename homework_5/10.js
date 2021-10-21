function fun(a) {
    let array = '';
    for (const [key, value] of Object.entries(a)) {
        array += `${key}:${value},`;
    }
    return array.slice(0,-1);
}

const object = {
    name: 'name',
    surname: 'name',
    number: 1322,
}

console.log(fun(object))