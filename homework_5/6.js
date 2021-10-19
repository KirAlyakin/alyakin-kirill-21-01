function calculator(num, total) {
    this.total = 0;
    this.num = num;
    this.sum = function () {
        return this.total = this.total+this.num;
    }
    this.min = function () {
        return this.total = this.total-this.num;
    }
    this.pro = function () {
        return this.total = this.total*this.num;
    }
    this.del = function () {
        return this.total = this.total/this.num;
    }
    this.null = function () {
        return this.total = 0;
    }
}

let calc = new calculator(3)
console.log(calc.sum())
console.log(calc.sum())
console.log(calc.min())
console.log(calc.pro())
console.log(calc.del())
console.log(calc.null())