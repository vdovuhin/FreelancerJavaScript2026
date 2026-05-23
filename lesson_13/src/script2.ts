/*
	---	---		Задача 2. 
	Розробити функцію, у яку передають об’єкт (день, місяць, рік). 
	Визначити, який буде рік через N місяців.
*/
type DateObj = {
	day: number;
	month: number;
	year: number;
}

let dateOb: DateObj = {
	day: 23,
	month: 5,
	year: 2026
}

function getFutureYear(date: DateObj, n: number): number {
	let totalMonths = date.month + n;
	let futureYear = date.year + Math.floor(totalMonths / 12);
	return futureYear;
};

const monthsToAdd = 25;
const futureYear = getFutureYear(dateOb, monthsToAdd);

document.write(
  `Day: ${dateOb.day}, Month ${dateOb.month}, Year ${dateOb.year}`,
);
document.write(`<p> Через ${monthsToAdd} місяців буде ${futureYear} рік </p>`);
