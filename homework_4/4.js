const name = prompt("Введите ваше ФИО", "Пупкин Василий Андреевич")

const regExp = /^[а-яА-я]+ [а-яА-я]+( [а-яА-я]+(вич|вна))?$/

alert(regExp.test(name))