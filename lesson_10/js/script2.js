"use strict";
/*
        Знайти суми елементів у вказаній області(зафарбована область охоплює відповідну половину рядків і стовпців)
*/
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
//========================================================================================================================================================
// номери рядків від 0 до половини, стовпці від 0 до половини
let sum1 = 0;
for (let column = 0; column < matrix.length / 2; column++) {
    for (let row = 0; row < matrix[column].length / 2; row++) {
        sum1 += matrix[column][row];
    }
}
document.write(`Сума елементів у першій області: ${sum1}<br>`);
// номери рядків від 0 до половини, стовпці від половини до кінця
let sum2 = 0;
for (let column = 0; column < matrix.length / 2; column++) {
    for (let row = matrix[column].length / 2; row < matrix[column].length; row++) {
        sum2 += matrix[column][row];
    }
}
document.write(`Сума елементів у другій області: ${sum2}<br>`);
// номери рядків від половини до кінця, стовпці від 0 до половини
let sum3 = 0;
for (let column = matrix.length / 2; column < matrix.length; column++) {
    for (let row = 0; row < matrix[column].length / 2; row++) {
        sum3 += matrix[column][row];
    }
}
document.write(`Сума елементів у третій області: ${sum3}<br>`);
// номери рядків від половини до кінця , стовпці від половини до кінця
let sum4 = 0;
for (let column = matrix.length / 2; column < matrix.length; column++) {
    for (let row = matrix[column].length / 2; row < matrix[column].length; row++) {
        sum4 += matrix[column][row];
    }
}
document.write(`Сума елементів у четвертій області: ${sum4}<br>`);
// Суму парних рядків
let sum5 = 0;
for (let column = 0; column < matrix.length; column += 2) {
    for (let row = 0; row < matrix[column].length; row += 2) {
        sum5 += matrix[column][row];
    }
}
document.write(`Сума елементів у парних рядках: ${sum5}<br>`);
// Суму непарних стовпців
let sum6 = 0;
for (let column = 1; column < matrix.length; column += 2) {
    for (let row = 1; row < matrix[column].length; row += 2) {
        sum6 += matrix[column][row];
    }
}
document.write(`Сума елементів у непарних стовпцях: ${sum6}<br>`);
// У парних рядках – непарні стовпці, у непарних – парні.
let sum7 = 0;
for (let column = 0; column < matrix.length; column += 2) {
    for (let row = 1; row < matrix[column].length; row += 2) {
        sum7 += matrix[column][row];
    }
}
document.write(`Сума елементів у парних рядках, непарних стовпцях: ${sum7}<br>`);
let sum8 = 0;
for (let column = 1; column < matrix.length; column += 2) {
    for (let row = 0; row < matrix[column].length; row += 2) {
        sum8 += matrix[column][row];
    }
}
document.write(`Сума елементів у непарних рядках, парних стовпцях: ${sum8}<br>`);
