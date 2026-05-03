//-Масив Дано масив 30 випадкових цілих чисел

let arrRandom: number[] = [];

let getRandomIntdex =(min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
for (let i = 0; i < 30; i++) {
	arrRandom.push(getRandomIntdex(1, 30));
}
//========================================================================================================================================================
/*	
	Підрахувати скільки було обмінів під час сортування бульбашкою
*/
let arrBubble = [...arrRandom];
let sortBubble = 0;
let exchange;
do {
  exchange = false;
  for (let i = 0; i < arrBubble.length - 1; i++) {
    if (arrBubble[i] > arrBubble[i + 1]) {
      let temp = arrBubble[i];
      arrBubble[i] = arrBubble[i + 1];
      arrBubble[i + 1] = temp;
      exchange = true;
      sortBubble++;
    }
  }
} while (exchange);
document.write(`Кількість обмінів: ${sortBubble}<br>`);
//========================================================================================================================================================
/*
	Підрахувати скільки було обмінів під час сортування змішуванням.
*/
let arrMixing = [...arrRandom];
let sortMixing = 0;
let left = 0;
let right = arrRandom.length - 1;

while (left < right) {
  for (let i = left; i < right; i++) {
    if (arrMixing[i] > arrMixing[i + 1]) {
      let temp = arrMixing[i];
      arrMixing[i] = arrMixing[i + 1];
      arrMixing[i + 1] = temp;
      sortMixing++;
    }
  }
  right--;
  for (let i = right; i > left; i--) {
    if (arrMixing[i] < arrMixing[i - 1]) {
      let temp = arrMixing[i];
      arrMixing[i] = arrMixing[i - 1];
      arrMixing[i - 1] = temp;
      sortMixing++;
    }
  }
  left++;
}
document.write(`Кількість обмінів: ${sortMixing}<br>`);
//========================================================================================================================================================
/*
Підрахувати скільки було обмінів під час сортування включеннями.
*/
let arrInclusion = [...arrRandom];
let sortInclusion = 0;
for (let i = 1; i < arrInclusion.length; i++) {
	let key = arrInclusion[i];
	let j = i - 1;
	while (j >= 0 && arrInclusion[j] > key) {
		arrInclusion[j + 1] = arrInclusion[j];
		j--;
		sortInclusion++;
	}	
	arrInclusion[j + 1] = key;
}
document.write(`Кількість обмінів: ${sortInclusion}<br>`);
//========================================================================================================================================================
/*
	Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
*/
let arrStages = [3, 5, 1, 4, 2];
do {
  exchange = false;
  for (let i = 0; i < arrStages.length - 1; i++) {
    if (arrStages[i] > arrStages[i + 1]) {
      let temp = arrStages[i];
      arrStages[i] = arrStages[i + 1];
      arrStages[i + 1] = temp;
      exchange = true;
      document.write(`Масив: ${arrStages}<br>`);
    }
  }
} while (exchange);
//========================================================================================================================================================
/*
	Дано масив імен. 
*/

const names = [
  "Олександр",
  "Марія",
  "Артем",
  "Анна",
  "Дмитро",
  "Олена",
  "Максим",
  "Юлія",
  "Іван",
  "Вікторія",
  "Андрій",
  "Софія",
  "Денис",
  "Наталія",
  "Микола",
  "Тетяна",
  "Сергій",
  "Оксана",
  "Роман",
  "Ірина",
  "Михайло",
  "Христина",
  "Павло",
  "Анастасія",
  "Олег",
  "Дар'я",
  "Василь",
  "Катерина",
  "Богдан",
  "Ольга",
  `Olga`,
];
//========================================================================================================================================================
/*
	Застосовуючи відповідне сортування 
	та бінарний пошук визначити
*/
let j;
do {
  j = false;
  for (let i = 0; i < names.length - 1; i++) {
    if (names[i].localeCompare(names[i + 1], "uk") > 0) {
      let temp = names[i];
      names[i] = names[i + 1];
      names[i + 1] = temp;
      j = true;
    }
  }
} while (j);
//========================================================================================================================================================
/*
	Чи є у масиві ім’я «Olga» і під яким індексом.
*/

function benarySearch(arr: string[], target: string): number { 
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}

let index = benarySearch(names, "Olga");

document.write(`Індекс імені "Olga": ${index === -1 ? "Ім'я не знайдено" : index}<br>`);
//========================================================================================================================================================
/*
	Чи є у масиві ім’я довжиною 5 символів і під яким індексом.
*/
function benarySearchByLength(arr: string[], targetLength: number): number {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length === targetLength) {
			return i;
		}
	}
	return -1;
}

let indexByLength = benarySearchByLength(names, 5);

document.write(`Індекс імені з довжиною 5 символів: ${indexByLength === -1 ? "Ім'я не знайдено" : indexByLength}<br>`);
//========================================================================================================================================================
/*
	Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). 
	Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
*/
function getRandomDay(): string {
	function getRandomInt(min: number, max: number): number { 
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let daysOfWeek = ` `;
	switch (getRandomInt(1, 7)) {
    case 1 : daysOfWeek=`Понеділок`;
      break;
 		case 2 : daysOfWeek=`Вівторок`;
			break;
		case 3 : daysOfWeek=`Середа`;
			break;
		case 4 : daysOfWeek=`Четвер`;
			break;
		case 5 : daysOfWeek=`П'ятниця`;
			break;
		case 6 : daysOfWeek=`Субота`;
			break;
		case 7 : daysOfWeek=`Неділя`;
      break;    
	}
	return daysOfWeek;
}

let twoDimensionalArray: string[][] = [];
for (let i = 0; i < 4; i++) {
	twoDimensionalArray[i] = [];
	for (let j = 0; j < 8; j++) {
		twoDimensionalArray[i][j] = getRandomDay();
	}
}

let countSundays: number[] = [];
for (let i = 0; i < twoDimensionalArray.length; i++) {
	let count = 0;
	for (let j = 0; j < twoDimensionalArray[i].length; j++) {
		if (twoDimensionalArray[i][j] === `Неділя`) {
			count++;
		}
	}
	countSundays[i] = count;
}

document.write(`Кількість неділь у кожному рядку: ${countSundays}<br>`);