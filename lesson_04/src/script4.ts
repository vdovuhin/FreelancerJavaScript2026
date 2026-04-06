//	Вивести таблицю з 3 рядків і 7 стовпців

if (confirm('Почати тестування?')) {
	document.write(`<table class="table">`);
	for (let a = 1; a < 4; a++) {
		document.write(`<tr class="table__items">`);
		for (let b = 1; b <= 7; b++) {
			document.write(`<td class="table__item">${b}</td>`);
		}
			document.write(`</tr>`);
	}
	document.write(`</table>`);
}

