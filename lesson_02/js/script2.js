"use strict";
let a = prompt("Ведіть вартісь товару", '400');
let b = prompt("Ведіте кількись грошей", "1000");
const pricProduct = a ? parseFloat(a) : 400;
const cash = b ? parseFloat(b) : 1000;
const LOTTERY = 4;
if (pricProduct < cash) {
    document.write("Пропоную вам придбати лотеркю по цені" + " " + `${LOTTERY}` + " " + "грн");
}
else {
    document.write("Сорі в грошей не хватает");
}
