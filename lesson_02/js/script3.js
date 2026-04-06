"use strict";
let randomNumber = Math.floor(Math.random() * 5) + 1;
//Перша попидка
let a = prompt("Первое попитка введіть целое число ", "3");
let numeric = a ? parseInt(a) : 3;
if (randomNumber === numeric) {
    document.write("Вийграл");
}
else {
    let a = prompt("Друге  попитка введіть целое число ", "2");
    let numeric = a ? parseInt(a) : 3;
    if (randomNumber === numeric) {
        document.write("Вийграл");
    }
    else {
        document.write("Сори треба було" + "" + `${randomNumber}`);
    }
}
