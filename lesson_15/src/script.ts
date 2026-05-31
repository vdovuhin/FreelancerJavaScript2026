/*
			===	Задача 1. 
	Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
	Дата представляється структурою із трьома полями. 
	Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. В
	ведення та виведення дати реалізувати за допомогою методу  toString.
*/

class TDate {
  #day!: number;
  #month!: number;
  #year!: number;

  constructor(day: number, month: number, year: number) {
    this.Year = year;
    this.Month = month;
    this.Day = day;
  }

  // --- ГЕТТЕРИ ---
  get Day() {
    return this.#day;
  }
  get Month() {
    return this.#month;
  }
  get Year() {
    return this.#year;
  }

  // --- СЕТТЕРИ ---
  set Year(value: number) {
    if (value < 1) throw new Error("Недійсне значення року");
    this.#year = value;
  }
  set Month(value: number) {
    if (value < 1 || value > 12) throw new Error("Недійсне значення місяця");
    this.#month = value;
  }
  set Day(value: number) {
    const maxDay = this.getMaxDay(this.#month, this.#year);
    if (value < 1 || value > maxDay) {
      throw new Error("Недійсне значення дня");
    }
    this.#day = value;
  }

  // --- ТВІЙ МЕТОД ПЕРЕВІРКИ ДНІВ
  getMaxDay(month: number, year: number): number {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          ? 29
          : 28;
      default:
        throw new Error("Недійсне значення місяця");
    }
  }

  // Додатковий метод, щоб перетворити число місяця на красиве слово
  getMonthName(month: number): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  }
  toString(): string {
    return `${this.Day} ${this.getMonthName(this.Month)} ${this.Year}`;
  }
}

const date = new TDate(15, 8, 2026);

document.write(`date : ${date.toString()} <br>`); // Output: 15.8.2026


