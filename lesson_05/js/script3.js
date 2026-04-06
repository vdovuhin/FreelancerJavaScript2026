"use strict";
/*
    Поступово генерувати 100 випадкових чисел від 1 до 1000.
    Підрахувати яких чисел більше: парних чи непарних.
*/
if (confirm("Почати тестування?")) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 1; i <= 100; i++) {
        let randomNamber = Math.floor(Math.random() * 1000) + 1;
        if (randomNamber % 2 === 0)
            evenNumber += randomNamber;
        else
            oddNumber += randomNamber;
    }
    document.write(` : ${evenNumber}<br>`);
    document.write(` : ${oddNumber}<br>`);
}
