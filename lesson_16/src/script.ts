/*
			===	Задача 1. 
	Створити клас, що дозволяє виконувати такі операції над масивами: 
	знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
*/

class ArrayOperations {
  positiveNumber: number = 0;
  negativeNumber: number = 0;

  static numberCount: number = 0;

  constructor(public Arr: number[]) {
    ArrayOperations.numberCount++;
  }

  countPositive(Arr: number[]): number {
    this.positiveNumber = Arr.filter((num) => num > 0).length;

    return this.positiveNumber;
  }

  countNegative(Arr: number[]): number {
    this.negativeNumber = Arr.filter((num) => num < 0).length;
    return this.negativeNumber;
  }

  toString(): string {
    return `Positive Count: ${this.countPositive(this.Arr)},<br>Negative Count: ${this.countNegative(this.Arr)},<br>Total Count: ${ArrayOperations.numberCount}`;
  }
}

const myNumbers = [5, -3, 2, 5, -1, 0, 5, -8];

const myClass = new ArrayOperations(myNumbers);
console.log(myClass);

document.write(` ${myClass}`);

