"use strict";
/*
    Дано послідовність цін товарів та назв (у окремих масивах).
    Вивести на екран ті, які може собі дозволити	користувач (кількість грошей задається).
    Приклад збереження даних
*/
const userMani = parseInt(prompt(`Скільки у вас грошей?`, "50"));
let productsPrices = [1000, 20, 31];
let productsTitles = ['cheese', 'juice', 'bread'];
let balance = userMani;
for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] <= balance) {
        balance -= productsPrices[i];
        document.write(` Ви можете купити ${productsTitles[i]} по ціне ${productsPrices[i]}<br>`);
    }
}
