"use strict";
/*
    *=== Завдання 1: ===
    Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
    Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
                        
*/
let lengthMay = 3;
function getRandomArray(a) {
    let arr = [];
    for (let i = 0; i < a; i++) {
        let element = Math.floor(Math.random() * 10);
        arr.push(element);
    }
    return arr;
}
let arrGenerator = getRandomArray(lengthMay);
function myRecursiv(arr) {
    let result = [];
    function backRecursiv(currentArr, remainingArr) {
        if (remainingArr.length === 0) {
            result.push(currentArr);
            return;
        }
        for (let i = 0; i < remainingArr.length; i++) {
            let chosenElement = remainingArr[i];
            let nextRemaining = remainingArr.filter((_, index) => index !== i);
            backRecursiv([...currentArr, chosenElement], nextRemaining);
        }
    }
    backRecursiv([], arr);
    return result;
}
document.write(`${myRecursiv(arrGenerator)}<br>`);
//========================================================================================================================================================
/*
    *	=== Завдання 2: ===
    Дано масив імен спортсменів.
    Розробити програму для виведення усіх можливих
    результатів змагань (списки імен у відповідності до місць, які вони займуть).

*/
let people = ["Алексей", "Мария", "Дмитрий", "Анна", "Иван"];
function getPairs(arr) {
    let allResults = [];
    function backtrackString(remaining, currentPairs) {
        if (remaining.length === 1) {
            allResults.push(currentPairs);
            return;
        }
        let first = remaining[0];
        let others = remaining.slice(1);
        for (let i = 0; i < others.length; i++) {
            let second = others[i];
            let newPair = [first, second];
            let leftAfterPairing = others.filter((_, idx) => idx !== i);
            backtrackString(leftAfterPairing, [...currentPairs, newPair]);
        }
    }
    backtrackString(arr, []);
    return allResults;
}
document.write(`${people}<br>`);
document.write(`${getPairs(people)}<br>`);
console.log(getPairs(people));
//========================================================================================================================================================
/*
    *	=== Завдання 3: ===
    Виведіть всі можливі наступні комбінації ходів користувачів
    у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації
    (тобто маємо двовимірний масив з елементами :
    0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно
    вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли).
    Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
*/
let pole = [
    [0, "X", " "],
    ["X", " ", " "],
    [" ", "X", " "],
];
function getPlaiFullField(arrGem) {
    let fullField = [];
    function poleGems(row, col) {
        if (col === 3) {
            row++;
            col = 0;
        }
        if (row === 3) {
            fullField.push(arrGem.map(line => [...line]));
            return;
        }
        if (arrGem[row][col] === " ") {
            arrGem[row][col] = "X";
            poleGems(row, col + 1);
            arrGem[row][col] = 0;
            poleGems(row, col + 1);
            arrGem[row][col] = " ";
        }
        else
            poleGems(row, col + 1);
    }
    poleGems(0, 0);
    return fullField;
}
document.write(`${getPlaiFullField(pole)}<br>`);
