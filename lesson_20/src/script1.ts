/*
	Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). 
	На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, 
	кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків) 
*/

class Person {
	private name: string;
	private age: number;
	private address: string;	
	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}	
	toString() {
		return `Ім'я: ${this.name}, Вік: ${this.age}, Адреса: ${this.address}`;
	}
	yearBirth() {
		const currentYear = new Date().getFullYear();
		return currentYear - this.age;
	}
}

class _Worker extends Person {
	private position: string;
	private salary: number;
	private taxRate: number;
	constructor(name: string, age: number, address: string, position: string, salary: number, taxRate: number) {
		super(name, age, address);
		this.position = position;
		this.salary = salary;
		this.taxRate = taxRate;
	}
	annualEarnings() {
		return this.salary * 12;
	}
	taxAmount() {
		return this.annualEarnings() * this.taxRate / 100;
	}	
}

// --- Перевірка роботи ---
const employee = new _Worker("Олександр", 30, "Київ, вул. Хрещатик 1", "Developer", 50000, 19.5);

console.log(employee.toString()); 
// Виведе: Ім'я: Олександр, Вік: 30, Адреса: Київ, вул. Хрещатик 1, Посада: Developer, Місячна з/п: 50000грн

console.log(`Рік народження: ${employee.yearBirth()}`);
console.log(`Податків за рік: ${employee.taxAmount()} грн`);
console.log(`Виплачено на руки за рік: ${employee.annualEarnings() - employee.taxAmount()} грн`);