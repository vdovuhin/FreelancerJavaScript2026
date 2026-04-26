/*
	Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
*/

const K: number = 5; // Кількість магазинів
const day: number = 7; // Кількість днів у тижні

function getProfitRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let shops: number[][] = [];
for (let shop = 0; shop < K; shop++) {
	let profit: number[] = [];
	for (let j = 0; j < day; j++) {
		profit.push(getProfitRandom(100, 500));
	}
	shops.push(profit);
}


//========================================================================================================================================================
//загальний прибуток кожного масиву за тиждень;
let sumProfitShops = shops.map((shop) => shop.reduce((sum, profit) => sum + profit, 0));
console.log("Загальний прибуток кожного магазину за тиждень:", sumProfitShops);
document.write(`Загальний прибуток кожного магазину за тиждень: ${sumProfitShops}</>`);
//загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
let sumProfit = 0;
for (let day = 0; day < shops[0].length; day++) {	
	for (let shop = 0; shop < shops.length; shop++) {
		sumProfit += shops[shop][day];
	}	
}
document.write(`Загальний прибуток усіх магазинів по дням: ${sumProfit}</br>`);

//загальний прибуток за робочі дні
let sumProfitWork = 0;
for (let day = 0; day < shops[0].length - 2; day++) {	
	for (let shop = 0; shop < shops.length; shop++) {
		sumProfitWork += shops[shop][day];
	}
}
document.write(`Загальний прибуток за робочі дні: ${sumProfitWork}</br>`);
//загальний прибуток за вихідні дні
let sumProfitWeekend = 0;
for (let day = shops[0].length - 2; day < shops[0].length; day++) {	
	for (let shop = 0; shop < shops.length; shop++) {
		sumProfitWeekend += shops[shop][day];
	}
}
document.write(`Загальний прибуток за вихідні дні: ${sumProfitWeekend}</br>`);
//максимальний прибуток за середу
let maxProfitWednesday = 0;
for (let shop = 0; shop < shops.length; shop++) {
	if (shops[shop][2] > maxProfitWednesday) {
		maxProfitWednesday = shops[shop][2];
	}
}
document.write(`Максимальний прибуток за середу: ${maxProfitWednesday}</br>`);
//сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
let profitAbove200 = shops.flat(Infinity).filter((profit) => profit > 200);
document.write(`Загальний список зі значенням, які більші за 200: ${profitAbove200}</br>`);
//відсортувати кожен тиждень за зростанням.
let sortedShops = shops.map((shop) => shop.sort((a, b) => a - b));
document.write(
 `відсортувати кожен тиждень за зростанням: ${sortedShops}</br>`,	
);
//відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків
//потрібно порівнювати максимальні елементи у кожному з цих рядків
let sortedShopsByMax = shops.map((shop) => shop.sort((a, b) => b - a));
document.write(`відсортувати тижні за спаданням максимального елемента: ${sortedShopsByMax}</br>`);
//упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму
//кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
let sortedShopsBySum = shops.sort((a, b) => {
	const sumA = a.reduce((sum, profit) => sum + profit, 0);
	const sumB = b.reduce((sum, profit) => sum + profit, 0);
	return sumB - sumA; // Сортуємо за спаданням суми
});
document.write(`Упорядкувати тижні за спаданням суми елементів: ${sortedShopsBySum}</br>`);

