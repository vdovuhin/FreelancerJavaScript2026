"use strict";
/*
    * Функція, яка за номером дня дозволяє з’ясувати
    * чи є цей день робочим
 */
const workingDays = parseInt(prompt(`Ведіть який сьгодні день від 1 до 7:`, '5'));
function isWorkingDay(day) {
    if (day >= 1 && day <= 5) {
        return 'Так, це робочий день.';
    }
    else if (day === 6 || day === 7) {
        return 'Ні, це вихідний день.';
    }
    else {
        throw new Error('Невірний номер дня. Введіть число от 1 до 7.');
    }
}
document.write(`isWorkingDay : ${isWorkingDay(workingDays)}`);
