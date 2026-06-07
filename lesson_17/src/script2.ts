/*
	=== Задача 3 ===
Користувач задає рік народження. Визначити кількість років користувача.
*/


const year = document.getElementById('birthYear') as HTMLInputElement;
const addBtn = document.getElementById('add') as HTMLButtonElement;
const ageEl = document.getElementById('age') as HTMLDivElement;

function calculateAge() {
	const birthYear = Number(year.value);
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;	
	ageEl.innerText = `Ваш вік: ${age} років`;
}

addBtn.addEventListener('click', calculateAge);


