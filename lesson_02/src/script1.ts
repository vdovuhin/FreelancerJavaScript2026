const childName1 = prompt("Як зовут вашего ребенка", "Серега");
const childName2 = prompt("Як зовут вашего ребенка", "Вова");

let canditName1 = prompt("Сколько какнфет у " + `${childName1}`, "1");
let canditName2 = prompt("Сколько какнфет у " + `${childName2}`, "3");
const CanditName1 = canditName1 ? parseInt(canditName1) : 1;
const CanditName2 = canditName2 ? parseInt(canditName2) : 3;


if (CanditName1 > CanditName2) {
	document.write("Цуекерок більше у" + " " + " " + `${childName1}`);
} else if (CanditName2 > CanditName1) {
  document.write("Цуекерок більше у" + " " + " " + `${childName2}`);
} else{
	document.write("У детей равное количество цукерок" );
}





