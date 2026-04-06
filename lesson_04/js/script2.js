"use strict";
//Вивести на екран 8 кнопок з написом “Hello”.
if (confirm("Почати тестування?")) {
    for (let j = 1; j <= 8; j++) {
        document.write(`<button class="button">Hello</button>`);
    }
}
