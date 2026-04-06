"use strict";
/*
    Дано масив, який містить оцінки з К предметів.
    Знайти середній бал і з’ясувати до якої категорії він відноситься
    (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
    трійочник(є хоча би одна трійка)).
*/
const assessments = [1, 4, 5, 4];
let element;
let average;
let sum = 0;
let minAssessment = assessments[0];
for (let i = 0; i < assessments.length; i++) {
    sum += assessments[i];
}
average = sum / assessments.length;
for (let i = 0; i < assessments.length; i++) {
    if (minAssessment > assessments[i]) {
        minAssessment = assessments[i];
    }
}
switch (minAssessment) {
    case 5:
        element = "відмінник";
        break;
    case 4:
        element = "хорошист";
        break;
    case 3:
        element = "трійочник";
        break;
    default:
        element = "двійочник";
        break;
}
document.write(`Середній бал: ${average}<br>`);
document.write(`Категорія ${element}<br>`);
