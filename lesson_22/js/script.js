"use strict";
/*
            ===	Задача 1.
    Дано клас PhoneNumber.
    Створити функцію перетворення до string,
    при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
*/
//========================================================================================================================================================
class PhoneNumber {
    constructor(number) {
        this._number = String(number);
    }
    [Symbol.toPrimitive](hint) {
        let cod = this._number.slice(0, 3);
        let operator;
        switch (cod) {
            case "050":
                operator = "MTC";
                break;
            case "096":
                operator = "Kyivstar";
                break;
            default:
                operator = "Невідомий оператор";
                break;
        }
        return operator;
    }
}
const phone1 = new PhoneNumber("0501234567");
const phone2 = new PhoneNumber("0965557788");
const phone3 = new PhoneNumber("0991112233");
console.log(String(phone1)); // MTC
console.log(String(phone2)); // Kyivstar
console.log(String(phone3)); // Невідомий оператор
//========================================================================================================================================================
/*
        ===	Задача 2.
    Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць).
    Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
*/
//========================================================================================================================================================
class Product {
    constructor(name, price, unitsNumber) {
        this.name = name;
        this.price = price;
        this.unitsNumber = unitsNumber;
    }
}
class Shop {
    constructor(products) {
        this.products = products; // Обычное присваивание без типизации
    }
    *[Symbol.iterator]() {
        for (const product of this.products) {
            yield `${product.name} - ${product.price * product.unitsNumber} грн`;
        }
    }
}
const shop = new Shop([
    new Product('Герконова кнопка КМ-2', 10, 20),
    new Product('Акумулятор AAA NiMH 650mAh', 165, 4),
    new Product('Резистор 2Вт', 3, 200),
]);
for (const item of shop) {
    console.log(item);
}
//========================================================================================================================================================
/*
    ===	Задача 3.
    Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
*/
function* generatorNumbers(counter) {
    let index = 0;
    while (index < counter) {
        let _number = Math.floor(Math.random() * 100 + 1) * 2;
        yield _number;
        index++;
    }
}
for (const num of generatorNumbers(8)) {
    console.log(num);
}
//========================================================================================================================================================
