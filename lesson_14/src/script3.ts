/*
		===		Задача 5. 
		Розробити клас «Керівник танців»
		=============================
			Поля
			Масив імен хлопців
			Масив імен дівчат
		=============================	

		=============================
			Методи
			Метод випадкового вибору імені хлопця
			Метод випадкового вибору імені дівчини
			Метод виведення пари для танців
			Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
		=============================
*/

class DanceLeader {
  // Поля
  nameBoysArr: string[];
  nameGirlsArr: string[];
  constructor(nameBoysArr: string[], nameGirlsArr: string[]) {
    this.nameBoysArr = nameBoysArr;
    this.nameGirlsArr = nameGirlsArr;
  }
  // Методи
  getRandomBoyName(): string {
    const randomIndex = Math.floor(Math.random() * this.nameBoysArr.length);
    return this.nameBoysArr[randomIndex];
  }
  getRandomGirlName(): string {
    const randomIndex = Math.floor(Math.random() * this.nameGirlsArr.length);
    return this.nameGirlsArr[randomIndex];
  }
  getDancePair(): string {
    if (this.nameBoysArr.length === 0 || this.nameGirlsArr.length === 0) {
      return "Немає достатньо імен для формування пари";
    }
    const boyName = this.getRandomBoyName();
    const girlName = this.getRandomGirlName();
    return `Пара для танців: ${boyName} та ${girlName}`;
  }
  run(): void {
    setInterval(() => {
      console.log(this.getDancePair());
    }, 5000);
  }
}

const boys = ["Іван", "Петро", "Олексій", "Дмитро"];
const girls = ["Марія", "Анна", "Олена", "Христина"];

const danceLeader = new DanceLeader(boys, girls);
console.log(danceLeader.run());
danceLeader.run();