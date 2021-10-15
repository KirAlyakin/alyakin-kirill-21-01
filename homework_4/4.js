const name = prompt("Введите ваше ФИО", "Пупкин Василий Андреевич")
const nameCheck = name.replace(/ /g,'')
const regExp = /^[а-яА-я]+[а-яА-я]+([а-яА-я]+(вич|вна))?$/

alert(regExp.test(nameCheck))