"use strict";
/*
        === Задача 2.
    Зробити конвертер валют (курси валют – константи у скрипті)
*/
const DOLLAR_RATE = 40;
const EURO_RATE = 42;
const hryvnia = document.getElementById('hryvnia');
const euro = document.getElementById('euro');
const dollar = document.getElementById('dollar');
const add1Btn = document.getElementById('add1');
const add2Btn = document.getElementById('add2');
const add3Btn = document.getElementById('add3');
function convertHryvnia() {
    const value = Number(hryvnia.value);
    const dollarValue = value * DOLLAR_RATE;
    const euroValue = value * EURO_RATE;
    document.getElementById('hryvniaDollar').innerText = `У доларах: ${dollarValue}`;
    document.getElementById('hryvniaEuro').innerText = `У евро: ${euroValue}`;
}
function convertEuro() {
    const value = Number(euro.value);
    const hryvniaValue = value * EURO_RATE;
    const dollarValue = value * (EURO_RATE / DOLLAR_RATE);
    document.getElementById('euroHryvnia').innerText = `У гривнях: ${hryvniaValue}`;
    document.getElementById('euroDollar').innerText = `У доларах: ${dollarValue}`;
}
function convertDollar() {
    const value = Number(dollar.value);
    const hryvniaValue = value * DOLLAR_RATE;
    const euroValue = value * (DOLLAR_RATE / EURO_RATE);
    document.getElementById('dollarHryvnia').innerText = `У гривнях: ${hryvniaValue}`;
    document.getElementById('dollarEuro').innerText = `У евро: ${euroValue}`;
}
add1Btn.addEventListener('click', convertHryvnia);
add2Btn.addEventListener('click', convertEuro);
add3Btn.addEventListener('click', convertDollar);
