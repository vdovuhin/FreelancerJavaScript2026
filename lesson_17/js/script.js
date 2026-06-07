"use strict";
/*
            ===	Задача 1.
. Розробити калькулятор
*/
// 1. Находим элементы на странице
//инпуты
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
//кнопки
const abbBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');
const resultEl = document.getElementById('result');
function getSum() {
    const value1 = Number(num1 === null || num1 === void 0 ? void 0 : num1.value);
    const value2 = Number(num2 === null || num2 === void 0 ? void 0 : num2.value);
    const sum = value1 + value2;
    return resultEl.innerText = `${sum}`;
}
function getDiff() {
    const value1 = Number(num1 === null || num1 === void 0 ? void 0 : num1.value);
    const value2 = Number(num2 === null || num2 === void 0 ? void 0 : num2.value);
    const sum = value1 - value2;
    return resultEl.innerText = `${sum}`;
}
function getMul() {
    const value1 = Number(num1 === null || num1 === void 0 ? void 0 : num1.value);
    const value2 = Number(num2 === null || num2 === void 0 ? void 0 : num2.value);
    const sum = value1 * value2;
    ;
    return resultEl.innerText = `${sum}`;
}
function getDiv() {
    const value1 = Number(num1 === null || num1 === void 0 ? void 0 : num1.value);
    const value2 = Number(num2 === null || num2 === void 0 ? void 0 : num2.value);
    if (value2 === 0) {
        resultEl.innerText = 'Error: Division by zero';
        return 'Error: Division by zero';
    }
    const sum = value1 / value2;
    return resultEl.innerText = `${sum}`;
}
abbBtn.addEventListener('click', getSum);
subBtn.addEventListener('click', getDiff);
mulBtn.addEventListener('click', getMul);
divBtn.addEventListener('click', getDiv);
