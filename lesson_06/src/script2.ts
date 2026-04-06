/*
	Створити окремі функції, які для 4 чисел знаходять:
	1)суму;
	2)добуток;
	3)середнє арифметичне;
	4)мінімальне значення. 
*/
let a: number = 10;
let b: number = 20;
let c: number = 30;
let d: number = 40;

function getSum(a: number, b: number, c: number, d: number): number {
	return a + b + c + d;
}

function getProduct(a: number, b: number, c: number, d: number): number {
	return a * b * c * d;
}

function getAverage(a: number, b: number, c: number, d: number): number {
	return (a + b + c + d) / 4;
}

function getMinimum(a: number, b: number, c: number, d: number): number {
	return Math.min(a, b, c, d);
}
document.write(`${getSum(a, b, c, d)}<br>`);
document.write(`${getAverage(a, b, c, d)}<br>`);
document.write(`${getProduct(a, b, c, d)}<br>`);
document.write(`${getMinimum(a, b, c, d)}<br>`);