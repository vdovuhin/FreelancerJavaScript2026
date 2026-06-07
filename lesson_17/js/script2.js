"use strict";
/*
    === Задача 3 ===
Користувач задає рік народження. Визначити кількість років користувача.
*/
const year = document.getElementById('birthYear');
const addBtn = document.getElementById('add');
const ageEl = document.getElementById('age');
function calculateAge() {
    const birthYear = Number(year.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    ageEl.innerText = `Ваш вік: ${age} років`;
}
addBtn.addEventListener('click', calculateAge);
