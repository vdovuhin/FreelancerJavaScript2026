"use strict";
/*
        ===	Задача 0
    Дано два об’єкта. Обидва містять масив цілих чисел.
    При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих,
    які знаходяться між заданими мінімальним і максимальних значенням.
    Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
*/
let obj1 = {
    arr: [6, 8, 9, 10],
    sum(arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return this.arr.reduce((acc, el) => {
            if (el > min && el < max) {
                return acc + el;
            }
            return acc;
        }, 0);
    },
};
let obj2 = {
    arr: [1, 2, 3, 4, 5],
    mult(arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return this.arr.reduce((acc, el) => {
            if (el > min && el < max) {
                return acc * el;
            }
            return acc;
        }, 1);
    },
};
//Те саме, але через CALL
console.log(obj1.sum.call(obj2, obj2.arr));
console.log(obj2.mult.call(obj1, obj1.arr));
//Те саме, але через APPLY
console.log(obj1.sum.apply(obj2, [obj2.arr]));
console.log(obj2.mult.apply(obj1, [obj1.arr]));
