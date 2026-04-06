"use strict";
/*
    Створити функцію, яка за номером місяця повертає пору року,
        до якої відноситься цей місяць.
*/
let month = parseInt(prompt(`Введіть номер місяця (1-12):`, "4"));
function getSeason(month) {
    if (month < 1 || month > 12)
        return "Некоректний номер місяця";
    if (month >= 3 && month <= 5)
        return "Весна";
    if (month >= 6 && month <= 8)
        return "Літо";
    if (month >= 9 && month <= 11)
        return "Осінь";
    return "Зима";
}
document.write(` : ${getSeason(month)}`);
