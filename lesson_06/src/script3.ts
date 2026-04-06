/*
	Створити функцію, яка для 3 заданих чисел знаходить 
	одночасно декілька результатів: кількість парних, 
	кількість додатних, кількість більших за 100.
*/

const number1: number = parseInt(prompt(`number1`, "10")!);
const number2: number = parseInt(prompt(`number2`, "330")!);
const number3: number = parseInt(prompt(`number3`, "-6")!);



function getEvenSum(a:number):number{
	let even:number = 0;
	if(a % 2 === 0){
		even++;
	}
	return even;

}

function getPositiv(a: number): number {
  let positive: number = 0;
  if (a > 0) {
    positive++;
  }
  return positive;
}

function getMore100(a: number): number {
	let more100: number = 0;	
	if (a > 100) {
		more100++;
	}
	return more100;
}

function getResults(a: number, b: number, c: number) {
  document.write(`${(getEvenSum(a) + getEvenSum(b) + getEvenSum(c))}<br>`);
  document.write(`${ (getPositiv(a) + getPositiv(b) + getPositiv(c))}<br>`);
	document.write(`${(getMore100(a) + getMore100(b) + getMore100(c))}<br>`);	
	return
}
getResults(number1, number2, number3) 