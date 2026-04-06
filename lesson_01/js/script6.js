"use strict";

let prays = parseFloat(prompt("Ведіть вартісь товара", 56));
let quantit = parseInt(prompt("Ведіть количество", 1));

let quaantPrays = prays*quantit;

document.write(`
	<p>Вартісь товара ${prays} количество${quantit}</p>
	<br>
	<p>Загальная сумм ${quaantPrays}</p>
`);
