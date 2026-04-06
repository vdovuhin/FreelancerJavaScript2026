//Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами..


if (confirm("Почати тестування?")) {
	const MIN = parseInt(prompt(`Ведіть любое число`, "6")!);
  const MAX = parseInt(prompt(`Ведіть любое число`, "95")!);
	
  let sum= 0;
	for (let a = MIN; a <= MAX; a++) {		
		if (a % 2 != 0)
			sum += a;   
	}
	document.write(`${sum}<br>`);
}
 