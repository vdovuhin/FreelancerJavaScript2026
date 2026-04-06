"use strict";
/*
    Спортсмен-лижник в перший день тренування пробіг 10 км.
    Кожного наступного дня він збільшував довжину пробігу на P% від довжини
    пробігу попереднього дня (P – дійсне число, 0 < P < 50).
    Визначити, після якого дня тренування сумарний пробіг лижника за
    всі дні перевищить 200 км. Вивести знайдену кількість днів K (ціле) і сумарний
    пробіг S (дійсне число).
*/
if (confirm("Почати тестування?")) {
    let mileageDay = 10;
    let userP = parseInt(prompt(`Водиться користовучом`, "10"));
    let day = 1;
    let sumMileage = 10;
    while (sumMileage < 200) {
        let p = mileageDay * (userP / 100);
        day++;
        mileageDay = mileageDay + p;
        sumMileage = sumMileage + mileageDay;
    }
    document.write(` : ${day}`);
    document.write(` : ${sumMileage.toFixed(2)}`);
}
