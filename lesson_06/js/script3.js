"use strict";
/*
    Створити функцію, яка для 3 заданих чисел знаходить
    одночасно декілька результатів: кількість парних,
    кількість додатних, кількість більших за 100.
*/
const number1 = parseInt(prompt(`number1`, "10"));
const number2 = parseInt(prompt(`number2`, "330"));
const number3 = parseInt(prompt(`number3`, "-6"));
function getEvenSum(a) {
    let even = 0;
    if (a % 2 === 0) {
        even++;
    }
    return even;
}
function getPositiv(a) {
    let positive = 0;
    if (a > 0) {
        positive++;
    }
    return positive;
}
function getMore100(a) {
    let more100 = 0;
    if (a > 100) {
        more100++;
    }
    return more100;
}
function getResults(a, b, c) {
    document.write(`${(getEvenSum(a) + getEvenSum(b) + getEvenSum(c))}<br>`);
    document.write(`${(getPositiv(a) + getPositiv(b) + getPositiv(c))}<br>`);
    document.write(`${(getMore100(a) + getMore100(b) + getMore100(c))}<br>`);
    return;
}
getResults(number1, number2, number3);
