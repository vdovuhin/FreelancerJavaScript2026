"use strict";
/*
        === Задача 2.
    Створити службове авто (водій, марка, номер).
    Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
*/
class CompanyCar {
    constructor(driver, brand, number) {
        this.driver = driver;
        this.brand = brand;
        this.number = number;
    }
    static getInstance(driver, brand, number) {
        if (!CompanyCar.instance) {
            CompanyCar.instance = new CompanyCar(driver, brand, number);
        }
        return CompanyCar.instance;
    }
    toString() {
        return `Driver: ${this.driver}, Brand: ${this.brand}, Number: ${this.number}<br>`;
    }
}
const car1 = CompanyCar.getInstance("John Doe", "Toyota", "ABC-123");
const car2 = CompanyCar.getInstance("Jane Smith", "Honda", "XYZ-789");
console.log(car1);
console.log(car2);
document.write(` ${car1}`);
document.write(` ${car2}`);
