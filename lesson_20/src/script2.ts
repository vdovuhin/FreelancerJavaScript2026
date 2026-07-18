/*
	Задача 1. 
	Виводити на екран скільки хвилин користувач вже на сайті	
*/
function problemFunc() {
  const startTime = new Date();

  setInterval(() => {
    const currentTime = new Date();

    const elapsedTime = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000 / 60);

    const elResult: HTMLElement | null = document.createElement("div");    
    elResult.innerText = `Користувач на сайті вже ${elapsedTime} хвилин`;	
		const container = document.querySelector(".page__container");
		if (container) {
      container.append(elResult);
    }
  }, 1000);
}
problemFunc();
/*
	Задача 2. 
	Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
*/
function problemFunc2() {
	const startHour: number =  parseInt(
    prompt("Введіть годину початку процедури") ?? "",
  );

	const startMinute: number =  parseInt(
    prompt("Введіть хвилини початку процедури") ?? "",
  );

	const startTime: number = startHour * 60 + startMinute;
	const procedureDuration: number = 30; // Тривалість процедури в хвилинах

	const currentTime: number = new Date().getHours() * 60 + new Date().getMinutes();

	const isProcedureRunning: boolean = currentTime >= startTime && currentTime < startTime + procedureDuration;

	console.log(`Процедура ${isProcedureRunning ? "ще триває" : "не триває"}`);
}
problemFunc2();
/*
	Задача 3. 
	Визначити скільки залишилось до кінця робочого дня (до 17.00)
*/
function problemFunc3() {
	const currentTime: Date = new Date();
	const endOfWorkDay: Date = new Date();
	endOfWorkDay.setHours(17, 0, 0, 0); // Встановлюємо кінець робочого дня на 17:00	
	const timeRemaining: number = (endOfWorkDay.getTime() - currentTime.getTime()) / 1000;
	console.log(`Залишилось ${Math.floor(timeRemaining / 60)} хвилин до кінця робочого дня`);
}
problemFunc3();

/*
	Задача 4. 
	Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і 
	час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
*/

function isDateInCurrentWeek(date: Date): boolean {
	const currentDate: Date = new Date();
	const currentDayOfWeek: number = currentDate.getDay(); // Отримуємо день тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)
	const startOfWeek: Date = new Date(currentDate);
	startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
	const endOfWeek: Date = new Date(startOfWeek);
	endOfWeek.setDate(startOfWeek.getDate() + 6);
	endOfWeek.setHours(23, 59, 59, 999);

	return date >= startOfWeek && date <= endOfWeek;
}

function 	problemFunc4() {
	const inputDate: string | null = prompt("Введіть дату і час у форматі рррр-мм-дд гг:хх") ?? "";
	const date: Date = new Date(inputDate);
	if (isDateInCurrentWeek(date)) {
		console.log("Вказана дата і час знаходяться у межах поточного тижня");
	} else {
		console.log("Вказана дата і час не знаходяться у межах поточного тижня");
	}	
}

/*
	Задача 5. 
	При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
*/

function problemFunc5() {
	const currentTime: Date = new Date();
	const startOfWorkDay: Date = new Date();
	startOfWorkDay.setHours(8, 0, 0, 0); // Встановлюємо початок робочого дня на 8:00

	if (currentTime < startOfWorkDay) {
		const timeRemaining: number = (startOfWorkDay.getTime() - currentTime.getTime()) / 1000;
		console.log(`До початку робочого дня залишилось ${Math.floor(timeRemaining / 60)} хвилин`);
	}else {
		console.log("Вітаємо! Робочий день вже розпочався.");
	}
}

/*
	Задача 6. 
	Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
*/

function problemFunc6() {
	const currentTime: Date = new Date();
	const londonTime: Date = new Date(currentTime.toLocaleString("en-US", {timeZone: "Europe/London"}));
	const parisTime: Date = new Date(currentTime.toLocaleString("en-US", {timeZone: "Europe/Paris"}));
	const sydneyTime: Date = new Date(currentTime.toLocaleString("en-US", {timeZone: "Australia/Sydney"}));

	console.log(`Час у Лондоні: ${londonTime.toLocaleTimeString()}`);
	console.log(`Час у Парижі: ${parisTime.toLocaleTimeString()}`);
	console.log(`Час у Сіднеї: ${sydneyTime.toLocaleTimeString()}`);
}

/*
Задача 7. 
	Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
*/
interface Student {
	name: string;
	birthDate: string; // Формат: день.місяць.рік
}

function parseDate(dateString: string): Date {
	const [day, month, year] = dateString.split(".").map(Number);
	return new Date(year, month - 1, day); // Місяці в JavaScript починаються з 0
}

function problemFunc7(): void {
	const students: Student[] = [
		{ name: "Іван", birthDate: "15.03.1995" },
		{ name: "Марія", birthDate: "22.07.1993" },
		{ name: "Олександр", birthDate: "10.12.1990" },
	];
	const oldestStudent: Student = students [0];

	for (const student of students) {
		if (parseDate(student.birthDate) < parseDate(oldestStudent.birthDate)) {
			oldestStudent.name = student.name;
			oldestStudent.birthDate = student.birthDate;
		}
	}
	console.log(`Найстарший студент: ${oldestStudent.name}`);
}

/*
Задача 8. 
	Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
*/

function problemFunc8() {
	const startTime: number = Date.now();
	const elapsedTime: number = Math.floor((Date.now() - startTime) / 1000);

	console.log(`Користувач зробив рух мишкою через ${elapsedTime} секунд після заходу на сайт`);

}
/*
	Задача  9. 
	Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
*/

function problemFunc9() {
	const startDateInput: string | null = prompt("Введіть дату початку декретної відпустки у форматі рррр-мм-дд") ?? "";
	const startDate: Date = new Date(startDateInput);
	const endDate: Date = new Date(startDate);
	endDate.setDate(startDate.getDate() + 200); // Додаємо 200 днів до дати початку
	const currentDate: Date = new Date();

	if (currentDate >= startDate && currentDate <= endDate) {
		console.log("Декретна відпустка триває.");
	}
	else if (currentDate < startDate) {
		console.log("Декретна відпустка ще не почалась.");
	}
	else {
		console.log("Декретна відпустка не триває.");
	}
}

/*
	Задача 10 . 
	Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
*/

function problemFunc10() {
	const productionDateInput: string | null = prompt("Введіть дату виробництва йогурта у форматі рррр-мм-дд") ?? "";
	const productionDate: Date = new Date(productionDateInput);
	const shelfLifeDays: number = parseInt(prompt("Введіть кількість днів придатності йогурта") ?? "0");
	const expirationDate: Date = new Date(productionDate);
	expirationDate.setDate(productionDate.getDate() + shelfLifeDays);
	const currentDate: Date = new Date();

	if (currentDate <= expirationDate) {
		console.log("Йогурт придатний.");
	} else {
		console.log("Йогурт не придатний.");
	}
}
/*
	Задача 12. 
	Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
*/

function problemFunc12() {
	const array: number[] = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 800) + 1);

	for (let i = 0; i < 1000; i++) {
		array.push(Math.floor(Math.random() * 800) + 1);
	}

	const bubbleSort : number[] = [...array];
	const insertionSort : number[] = [...array];

	let startTime: number = Date.now();

	for (let i = 0; i < bubbleSort.length - 1; i++) {
		for (let j = 0; j < bubbleSort.length - i - 1; j++) {
			if (bubbleSort[j] > bubbleSort[j + 1]) {
				const temp: number = bubbleSort[j];
				bubbleSort[j] = bubbleSort[j + 1];
				bubbleSort[j + 1] = temp;
			}
		}
	}

	let endTime: number = Date.now();
	const bubbleSortTime: number = endTime - startTime;

	startTime = Date.now();

	for (let i = 1; i < insertionSort.length; i++) {
		const key: number = insertionSort[i];
		let j: number = i - 1;
		while (j >= 0 && insertionSort[j] > key) {
			insertionSort[j + 1] = insertionSort[j];
			j--;
		}
		insertionSort[j + 1] = key;
	}

	endTime = Date.now();
	const insertionSortTime: number = endTime - startTime;

	console.log(`Час сортування бульбашкою: ${bubbleSortTime} ms`);
	console.log(`Час сортування вставкою: ${insertionSortTime} ms`);

	let fasterMethod: string;
	if (bubbleSortTime < insertionSortTime) {
		fasterMethod = "Сортування бульбашкою";
	} else if (insertionSortTime < bubbleSortTime) {
		fasterMethod = "Сортування вставкою";
	} else {
		fasterMethod = "Обидва методи мають однаковий час сортування";
	}
	console.log(`Швидший метод: ${fasterMethod}`);
}