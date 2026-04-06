"use strict";

let randMonth = Math.floor((Math.random() * 12) + 1);
let randDay = Math.floor(Math.random() * 7 + 1);
let randSum = randDay+randMonth

document.write(`
	Рандомний місяц = ${randMonth}<br> 
	Рандомний дені = ${randDay}<br>
	Сумма мисяца и дня = ${randSum} 
	`);
