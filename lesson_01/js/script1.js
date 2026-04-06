"use strict"
let numbr1 = parseInt(prompt("Ведіть першу цифр", 5));
let numbr2 = parseInt(prompt("Ведіть першу цифр", 6));;


let sum = numbr1 + numbr2;
let multiplication = numbr1 * numbr2;
let division = numbr1 / numbr2;
document.write(
  `
	<table>
	<tr>Сумма <tr>${sum}</tr></tr>
	</table>
	<table>
	<tr>Множеняа <tr>${multiplication}</tr></tr>
	</table>
	<table>
	<tr>Ділення <tr>${division}</tr></tr>
	</table>
`,
);