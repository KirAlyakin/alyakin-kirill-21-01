const nameProp = {configurable: false}
const otherProp = {writable: false, enumerable: false}

const Animal = {
    nameAnimal: 'Имя',
    eat() {
        console.log(`${this.nameAnimal} ест`)
    },
    say() {
        console.log(`Неизвестное животное молчит`)
    },
    rename: function (name) {
        const regexp = /^[А-Яа-я]|-|\s+$/
        regexp.test(name) ? this.nameAnimal = name : this.nameAnimal = "Некорректное имя"
    }

}

Object.defineProperties(Animal,{nameAnimal: nameProp})
Object.defineProperties(Animal,{eat: otherProp, say: otherProp})

Animal.eat()
Animal.say()

const Dog = {
    __proto__: Animal,
    say() {
        console.log('Пёс: орёт')
    }
}

Dog.rename("Рекс")

Dog.eat()
Dog.say()

const Cat = {
    __proto__: Animal,
    say() {
        console.log('Барсик: мяяяуууу')
    },
    hunt() {
        console.log(`${this.nameAnimal} охотится`)
    }
}

Cat.rename('Барсик')

Cat.eat()
Cat.say()
Cat.hunt()

const Popug = {
    __proto__: Animal,
    say() {
        console.log('Попуг: лучше бы молчал')
    }
}

Popug.rename('Попуг')

Popug.eat()
Popug.say()