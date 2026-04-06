"use strict";
/*
    Інвестор вклав  тис.грн на 20 років під 20 % річних, а потім на 17 років під 27 % річних.
    Визначити за допомогою циклів суму, яку він одержить.
*/
if (confirm("Почати тестування?")) {
    let investor = parseInt(prompt(`Який ваш внос`, '20'));
    let years = 1;
    do {
        let annual = 1.2;
        ++years;
        investor = investor * annual;
    } while (years < 20);
    do {
        let annual = 1.27;
        ++years;
        investor = investor * annual;
    } while (years < 37);
    document.write(` : ${years}`);
    document.write(` : ${investor.toFixed(2)}`);
}
