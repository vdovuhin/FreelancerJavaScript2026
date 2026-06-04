/*
		=== Задача 2. 
	Створити службове авто (водій, марка, номер).
	Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
*/

class CompanyCar {
	private static instance: CompanyCar;

	private constructor(public driver: string, public brand: string, public number: string) {}

	public static getInstance(driver: string, brand: string, number: string): CompanyCar {
		if (!CompanyCar.instance) {
			CompanyCar.instance = new CompanyCar(driver, brand, number);
		}
		return CompanyCar.instance;
	}
	toString(): string {
		return `Driver: ${this.driver}, Brand: ${this.brand}, Number: ${this.number}<br>`;
	}
}

const car1 = CompanyCar.getInstance("John Doe", "Toyota", "ABC-123");
const car2 = CompanyCar.getInstance("Jane Smith", "Honda", "XYZ-789");
console.log(car1);
console.log(car2);
document.write(` ${car1}`);	
document.write(` ${car2}`);	