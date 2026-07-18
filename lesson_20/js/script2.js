"use strict";
/*
    Задача 1.
    Виводити на екран скільки хвилин користувач вже на сайті
*/
function problemFunc() {
    const startTime = new Date();
    setInterval(() => {
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000 / 60);
        const elResult = document.createElement("div");
        elResult.innerText = `Користувач на сайті вже ${elapsedTime} хвилин`;
        const container = document.querySelector(".page__container");
        if (container) {
            container.append(elResult);
        }
    }, 1000);
}
problemFunc();
/*
    Задача 2.
    Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.
*/
function problemFunc2() {
    var _a, _b;
    const startHour = parseInt((_a = prompt("Введіть годину початку процедури")) !== null && _a !== void 0 ? _a : "");
    const startMinute = parseInt((_b = prompt("Введіть хвилини початку процедури")) !== null && _b !== void 0 ? _b : "");
    const startTime = startHour * 60 + startMinute;
    const procedureDuration = 30; // Тривалість процедури в хвилинах
    const currentTime = new Date().getHours() * 60 + new Date().getMinutes();
    const isProcedureRunning = currentTime >= startTime && currentTime < startTime + procedureDuration;
    console.log(`Процедура ${isProcedureRunning ? "ще триває" : "не триває"}`);
}
problemFunc2();
/*
    Задача 3.
    Визначити скільки залишилось до кінця робочого дня (до 17.00)
*/
function problemFunc3() {
    const currentTime = new Date();
    const endOfWorkDay = new Date();
    endOfWorkDay.setHours(17, 0, 0, 0); // Встановлюємо кінець робочого дня на 17:00	
    const timeRemaining = (endOfWorkDay.getTime() - currentTime.getTime()) / 1000;
    console.log(`Залишилось ${Math.floor(timeRemaining / 60)} хвилин до кінця робочого дня`);
}
problemFunc3();
/*
    Задача 4.
    Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і
    час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
*/
function isDateInCurrentWeek(date) {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay(); // Отримуємо день тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    return date >= startOfWeek && date <= endOfWeek;
}
function problemFunc4() {
    var _a;
    const inputDate = (_a = prompt("Введіть дату і час у форматі рррр-мм-дд гг:хх")) !== null && _a !== void 0 ? _a : "";
    const date = new Date(inputDate);
    if (isDateInCurrentWeek(date)) {
        console.log("Вказана дата і час знаходяться у межах поточного тижня");
    }
    else {
        console.log("Вказана дата і час не знаходяться у межах поточного тижня");
    }
}
/*
    Задача 5.
    При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
*/
function problemFunc5() {
    const currentTime = new Date();
    const startOfWorkDay = new Date();
    startOfWorkDay.setHours(8, 0, 0, 0); // Встановлюємо початок робочого дня на 8:00
    if (currentTime < startOfWorkDay) {
        const timeRemaining = (startOfWorkDay.getTime() - currentTime.getTime()) / 1000;
        console.log(`До початку робочого дня залишилось ${Math.floor(timeRemaining / 60)} хвилин`);
    }
    else {
        console.log("Вітаємо! Робочий день вже розпочався.");
    }
}
/*
    Задача 6.
    Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
*/
function problemFunc6() {
    const currentTime = new Date();
    const londonTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Europe/London" }));
    const parisTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
    const sydneyTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
    console.log(`Час у Лондоні: ${londonTime.toLocaleTimeString()}`);
    console.log(`Час у Парижі: ${parisTime.toLocaleTimeString()}`);
    console.log(`Час у Сіднеї: ${sydneyTime.toLocaleTimeString()}`);
}
function parseDate(dateString) {
    const [day, month, year] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day); // Місяці в JavaScript починаються з 0
}
function problemFunc7() {
    const students = [
        { name: "Іван", birthDate: "15.03.1995" },
        { name: "Марія", birthDate: "22.07.1993" },
        { name: "Олександр", birthDate: "10.12.1990" },
    ];
    const oldestStudent = students[0];
    for (const student of students) {
        if (parseDate(student.birthDate) < parseDate(oldestStudent.birthDate)) {
            oldestStudent.name = student.name;
            oldestStudent.birthDate = student.birthDate;
        }
    }
    console.log(`Найстарший студент: ${oldestStudent.name}`);
}
/*
Задача 8.
    Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
*/
function problemFunc8() {
    const startTime = Date.now();
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Користувач зробив рух мишкою через ${elapsedTime} секунд після заходу на сайт`);
}
/*
    Задача  9.
    Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
*/
function problemFunc9() {
    var _a;
    const startDateInput = (_a = prompt("Введіть дату початку декретної відпустки у форматі рррр-мм-дд")) !== null && _a !== void 0 ? _a : "";
    const startDate = new Date(startDateInput);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 200); // Додаємо 200 днів до дати початку
    const currentDate = new Date();
    if (currentDate >= startDate && currentDate <= endDate) {
        console.log("Декретна відпустка триває.");
    }
    else if (currentDate < startDate) {
        console.log("Декретна відпустка ще не почалась.");
    }
    else {
        console.log("Декретна відпустка не триває.");
    }
}
/*
    Задача 10 .
    Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
*/
function problemFunc10() {
    var _a, _b;
    const productionDateInput = (_a = prompt("Введіть дату виробництва йогурта у форматі рррр-мм-дд")) !== null && _a !== void 0 ? _a : "";
    const productionDate = new Date(productionDateInput);
    const shelfLifeDays = parseInt((_b = prompt("Введіть кількість днів придатності йогурта")) !== null && _b !== void 0 ? _b : "0");
    const expirationDate = new Date(productionDate);
    expirationDate.setDate(productionDate.getDate() + shelfLifeDays);
    const currentDate = new Date();
    if (currentDate <= expirationDate) {
        console.log("Йогурт придатний.");
    }
    else {
        console.log("Йогурт не придатний.");
    }
}
/*
    Задача 12.
    Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
*/
function problemFunc12() {
    const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 800) + 1);
    for (let i = 0; i < 1000; i++) {
        array.push(Math.floor(Math.random() * 800) + 1);
    }
    const bubbleSort = [...array];
    const insertionSort = [...array];
    let startTime = Date.now();
    for (let i = 0; i < bubbleSort.length - 1; i++) {
        for (let j = 0; j < bubbleSort.length - i - 1; j++) {
            if (bubbleSort[j] > bubbleSort[j + 1]) {
                const temp = bubbleSort[j];
                bubbleSort[j] = bubbleSort[j + 1];
                bubbleSort[j + 1] = temp;
            }
        }
    }
    let endTime = Date.now();
    const bubbleSortTime = endTime - startTime;
    startTime = Date.now();
    for (let i = 1; i < insertionSort.length; i++) {
        const key = insertionSort[i];
        let j = i - 1;
        while (j >= 0 && insertionSort[j] > key) {
            insertionSort[j + 1] = insertionSort[j];
            j--;
        }
        insertionSort[j + 1] = key;
    }
    endTime = Date.now();
    const insertionSortTime = endTime - startTime;
    console.log(`Час сортування бульбашкою: ${bubbleSortTime} ms`);
    console.log(`Час сортування вставкою: ${insertionSortTime} ms`);
    let fasterMethod;
    if (bubbleSortTime < insertionSortTime) {
        fasterMethod = "Сортування бульбашкою";
    }
    else if (insertionSortTime < bubbleSortTime) {
        fasterMethod = "Сортування вставкою";
    }
    else {
        fasterMethod = "Обидва методи мають однаковий час сортування";
    }
    console.log(`Швидший метод: ${fasterMethod}`);
}
