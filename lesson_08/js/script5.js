"use strict";
/*
    Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
    за весь рік;
    у першій половині року;
    у другій половині року;
    за літо;
    за ІІ квартал;
    за парні місяці (з парними номерами);
    за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
*/
let allYear = [4060, 4565, 2600, 1956, 1500, 980, 450, 320, 560, 1125, 2500, 3896];
let yearSum = 0;
let firstHalf = 0;
let secondHalf = 0;
let summerSum = 0;
let secondQuarter = 0;
let evenMonthSum = 0;
let seasonStartSum = 0;
for (let i = 0; i < allYear.length; i++) {
    let monthValue = allYear[i];
    let monthNum = i + 1; // Реальний номер місяця (1-12)
    // 1. За весь рік
    yearSum += monthValue;
    // 2. Перша половина (індекси 0-5)
    if (i < 6)
        firstHalf += monthValue;
    // 3. Друга половина (індекси 6-11)
    if (i >= 6)
        secondHalf += monthValue;
    // 4. Літо (червень, липень, серпень - індекси 5, 6, 7)
    if (i >= 5 && i <= 7)
        summerSum += monthValue;
    // 5. ІІ квартал (квітень, травень, червень - індекси 3, 4, 5)
    if (i >= 3 && i <= 5)
        secondQuarter += monthValue;
    // 6. Парні місяці (2, 4, 6, 8, 10, 12)
    if (monthNum % 2 === 0)
        evenMonthSum += monthValue;
    // 7. Початок сезону (березень(2), червень(5), вересень(8), грудень(11))
    // Ці місяці йдуть з кроком 3, починаючи з індексу 2 (березень)
    if (i === 2 || i === 5 || i === 8 || i === 11)
        seasonStartSum += monthValue;
}
document.write(`Весь рік: ${yearSum}<br>`);
document.write(`1-ша половина: ${firstHalf}<br>`);
document.write(`2-га половина: ${secondHalf}<br>`);
document.write(`Літо: ${summerSum}<br>`);
document.write(`ІІ квартал: ${secondQuarter}<br>`);
document.write(`Парні місяці: ${evenMonthSum}<br>`);
document.write(`Початок сезонів: ${seasonStartSum}<br>`);
