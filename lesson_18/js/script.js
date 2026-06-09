"use strict";
/*
            ===	Задача 1.
    Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
*/
const DIVLIST = document.querySelectorAll('.page__body div');
for (const DIV of DIVLIST) {
    DIV.addEventListener("click", function () {
        let nexElement = this.nextElementSibling;
        ColrElement(nexElement);
    });
}
;
function ColrElement(nexElement) {
    while (nexElement) {
        nexElement.style.color = 'red';
        nexElement = nexElement.nextElementSibling;
    }
    ;
}
;
