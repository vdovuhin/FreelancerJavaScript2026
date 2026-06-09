"use strict";
/*
        === Задача 2.
    Дано 5 елементів input.
    При введенні значення у якийсь із них необхідно автоматично заповнювати інші
    (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний),
    усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
*/
const Input = document.querySelectorAll("input");
for (let i = 0; i < Input.length; i++) {
    Input[i].addEventListener("input", function (e) {
        if (e.target.value === "") {
            for (let j = 0; j < Input.length; j++) {
                Input[j].value = "";
            }
            return;
        }
        ;
        let value = Number(e.target.value);
        for (let j = 0; j < Input.length; j++) {
            Input[j].value = value + (j - i);
        }
    });
}
