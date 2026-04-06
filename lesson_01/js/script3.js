"use strict"
let quantity = parseInt(prompt("Ведіть кількось товару", 1));

const PRAIS = 23;
const interes = 5 / 100;

let totalCost = Math.round((((quantity * PRAIS)*100)/100));
let prais = Math.round(((totalCost * (totalCost * interes)) * 100) / 100);

alert(`Вартість товару складає: ${totalCost}`);
alert(`З урахуванням ПДВ (5%) вартість становить: ${prais}`);

