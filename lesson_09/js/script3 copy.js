"use strict";
/*
    Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван»
*/
let names = ["Вася", "Оля", "Іван", "Наташа", "Саша", "Іван",];
let numberName = 0;
for (let i = 0; i < names.length; i++) {
    if (names[i] === "Іван") {
        numberName++;
    }
}
document.write(`Ім'я "Іван" зустрічається: ${numberName} раз`);
