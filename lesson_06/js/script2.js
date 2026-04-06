"use strict";
/*
    Створити окремі функції, які для 4 чисел знаходять:
    1)суму;
    2)добуток;
    3)середнє арифметичне;
    4)мінімальне значення.
*/
let a = 10;
let b = 20;
let c = 30;
let d = 40;
function getSum(a, b, c, d) {
    return a + b + c + d;
}
function getProduct(a, b, c, d) {
    return a * b * c * d;
}
function getAverage(a, b, c, d) {
    return (a + b + c + d) / 4;
}
function getMinimum(a, b, c, d) {
    return Math.min(a, b, c, d);
}
document.write(`${getSum(a, b, c, d)}<br>`);
document.write(`${getAverage(a, b, c, d)}<br>`);
document.write(`${getProduct(a, b, c, d)}<br>`);
document.write(`${getMinimum(a, b, c, d)}<br>`);
