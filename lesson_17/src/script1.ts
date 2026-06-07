/*
		=== Задача 2. 
	Зробити конвертер валют (курси валют – константи у скрипті)
*/

const DOLLAR_RATE = 40;
const EURO_RATE = 42;

const hryvnia = document.getElementById('hryvnia') as HTMLInputElement;
const euro = document.getElementById('euro') as HTMLInputElement;
const dollar = document.getElementById('dollar') as HTMLInputElement;


const add1Btn = document.getElementById('add1') as HTMLButtonElement;
const add2Btn = document.getElementById('add2') as HTMLButtonElement;
const add3Btn = document.getElementById('add3') as HTMLButtonElement;

function convertHryvnia() {
	const value = Number(hryvnia.value);
	const dollarValue = value * DOLLAR_RATE;
	const euroValue = value * EURO_RATE;
	document.getElementById('hryvniaDollar')!.innerText = `У доларах: ${dollarValue}`;
	document.getElementById('hryvniaEuro')!.innerText = `У евро: ${euroValue}`;
}

function convertEuro() {
	const value = Number(euro.value);
	const hryvniaValue = value * EURO_RATE;
	const dollarValue = value * (EURO_RATE / DOLLAR_RATE);
	document.getElementById('euroHryvnia')!.innerText = `У гривнях: ${hryvniaValue}`;
	document.getElementById('euroDollar')!.innerText = `У доларах: ${dollarValue}`;
}

function convertDollar() {
	const value = Number(dollar.value);
	const hryvniaValue = value * DOLLAR_RATE;
	const euroValue = value * (DOLLAR_RATE / EURO_RATE);
	document.getElementById('dollarHryvnia')!.innerText = `У гривнях: ${hryvniaValue}`;
	document.getElementById('dollarEuro')!.innerText = `У евро: ${euroValue}`;
}

add1Btn.addEventListener('click', convertHryvnia);
add2Btn.addEventListener('click', convertEuro);
add3Btn.addEventListener('click', convertDollar);