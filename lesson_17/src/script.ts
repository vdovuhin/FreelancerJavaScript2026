/*
			===	Задача 1. 
. Розробити калькулятор
*/

// 1. Находим элементы на странице
//инпуты
let num1 = document.getElementById('num1') as HTMLInputElement | null;
let num2 = document.getElementById('num2') as HTMLInputElement | null;
//кнопки
const abbBtn = document.getElementById('add') as HTMLButtonElement ;
const subBtn = document.getElementById('subtract') as HTMLButtonElement;
const mulBtn = document.getElementById('multiply') as HTMLButtonElement ;
const divBtn = document.getElementById('divide') as HTMLButtonElement ;

const resultEl = document.getElementById('result') as HTMLDivElement ;

function getSum() {
	const value1 = Number(num1?.value);
	const value2 = Number(num2?.value);
		const sum = value1 + value2;
    return resultEl.innerText = `${sum}`;
	}

function getDiff() {
	const value1 = Number(num1?.value);
	const value2 = Number(num2?.value);
		const sum = value1 - value2;		
    return resultEl.innerText = `${sum}`;
}

function getMul() {
	const value1 = Number(num1?.value);
	const value2 = Number(num2?.value);
		const sum = value1 * value2;
		;
    return resultEl.innerText = `${sum}`;
}

function getDiv() {
	const value1 = Number(num1?.value);
	const value2 = Number(num2?.value);

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