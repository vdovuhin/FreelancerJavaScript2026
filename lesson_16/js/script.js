"use strict";
/*
            ===	Задача 1.
    Створити клас, що дозволяє виконувати такі операції над масивами:
    знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
*/
class ArrayOperations {
    constructor(Arr) {
        this.Arr = Arr;
        this.positiveNumber = 0;
        this.negativeNumber = 0;
        ArrayOperations.numberCount++;
    }
    countPositive(Arr) {
        this.positiveNumber = Arr.filter((num) => num > 0).length;
        return this.positiveNumber;
    }
    countNegative(Arr) {
        this.negativeNumber = Arr.filter((num) => num < 0).length;
        return this.negativeNumber;
    }
    toString() {
        return `Positive Count: ${this.countPositive(this.Arr)},<br>Negative Count: ${this.countNegative(this.Arr)},<br>Total Count: ${ArrayOperations.numberCount}`;
    }
}
ArrayOperations.numberCount = 0;
const myNumbers = [5, -3, 2, 5, -1, 0, 5, -8];
const myClass = new ArrayOperations(myNumbers);
console.log(myClass);
document.write(` ${myClass}`);
