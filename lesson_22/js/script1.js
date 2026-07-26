"use strict";
var _a, _b, _c, _d, _e;
/*
        ===	Задача 5.
    Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
*/
//========================================================================================================================================================
const pupilAges = [12, 16, 8, 16, 12, 18, 16, 14];
const pupilMap = new Map();
for (const pupilAge of pupilAges) {
    pupilMap.set(pupilAge, ((_a = pupilMap.get(pupilAge)) !== null && _a !== void 0 ? _a : 0) + 1);
}
document.write(`<h2>Задача 5</h2><br>`);
for (const [pupilAge, count] of pupilMap) {
    document.write(`${pupilAge}: ${count}<br>`);
}
const maxPupilAge = Math.max(...pupilAges);
document.write(`Максимальне значення: ${maxPupilAge}<br>`);
const books = [
    { title: "Book 1", year: 2000, author: "Author 1" },
    { title: "Book 2", year: 2005, author: "Author 2" },
    { title: "Book 3", year: 2010, author: "Author 1" },
    { title: "Book 4", year: 2015, author: "Author 3" },
    { title: "Book 5", year: 2020, author: "Author 2" },
];
const bookAuthor = new Map();
for (const book of books) {
    bookAuthor.set(book.author, ((_b = bookAuthor.get(book.author)) !== null && _b !== void 0 ? _b : 0) + 1);
}
document.write(`<h2>Задача 6</h2><br>`);
for (const [author, count] of bookAuthor) {
    document.write(`${author}: ${count}<br>`);
}
//========================================================================================================================================================
/*
        ===	Задача 7.
    Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
    Підрахувати для кожного клієнта кількість відвідувань.
*/
//========================================================================================================================================================
const visitors = ['alex', 'olga', 'roman', 'alex', 'olga', 'roman', 'eltna'];
const visitMap = new Map();
for (const item of visitors) {
    visitMap.set(item, ((_c = visitMap.get(item)) !== null && _c !== void 0 ? _c : 0) + 1);
}
document.write("<h2>Задача 7</h2><br>");
for (const [item, count] of visitMap) {
    document.write(`${item} - ${count}</br>`);
}
const students = [
    { fullName: 'Коваленко Олександр Іванович', course: 1, faculty: 'Комп’ютерні науки' },
    { fullName: 'Мельник Марія Василівна', course: 3, faculty: 'Економічний' },
    { fullName: 'Шевченко Дмитро Петрович', course: 2, faculty: 'Комп’ютерні науки' },
    { fullName: 'Бондаренко Анна Сергіївна', course: 4, faculty: 'Філологічний' },
    { fullName: 'Ткаченко Артем Миколайович', course: 1, faculty: 'Інженерний' },
    { fullName: 'Кравченко Олена Ігорівна', course: 2, faculty: 'Економічний' },
    { fullName: 'Олійник Максим Юрійович', course: 3, faculty: 'Комп’ютерні науки' },
    { fullName: 'Захарченко Софія Олегівна', course: 4, faculty: 'Інженерний' },
];
const faculties = new Set();
const coursesMap = new Map();
for (const student of students) {
    faculties.add(student.faculty);
    coursesMap.set(student.course, ((_d = coursesMap.get(student.course)) !== null && _d !== void 0 ? _d : 0) + 1);
}
document.write("<h2>Задача 8</h2><br>");
document.write(`Кількість різних факультетів: ${faculties.size}<br>`);
for (const [course, count] of coursesMap) {
    document.write(`Курс ${course} - ${count} студентів<br>`);
}
//========================================================================================================================================================
/*
        ===	Задача 9.
    Дано масив показів температур. Підрахувати кількість входжень кожного із показів
    let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
    Заокруглити вверх значення та підрахувати кількість різних показів.
*/
//========================================================================================================================================================
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
const temperatureMap = new Map();
for (const temper of temperatures) {
    let rondTemptr = Math.ceil(temper);
    temperatureMap.set(rondTemptr, ((_e = temperatureMap.get(rondTemptr)) !== null && _e !== void 0 ? _e : 0) + 1);
}
document.write("<h2>Задача 9</h2><br>");
for (const [temper, count] of temperatureMap) {
    document.write(`${temper} - ${count}<br>`);
}
document.write(`Кількість різних показів: ${temperatureMap.size}<br>`);
//========================================================================================================================================================
/*
        ===	Задача 10.
    Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
    Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
    Також підрахувати скільки всього студентів відвідують хоча б один гурток.
*/
const groupMathematician = [
    'Коваленко',
    'Мельник',
    'Шевченко',
    'Бондаренко',
    'Ткаченко',
    'Кравченко'
];
const groupHistory = [
    'Олійник',
    'Шевченко',
    'Захарченко',
    'Бойко',
    'Коваленко',
    'Мороз'
];
const studentMathtm = new Set(groupMathematician);
const studentHist = new Set(groupHistory);
let count = 0;
for (const student of studentHist) {
    if (studentMathtm.has(student)) {
        count++;
    }
}
const studentsAll = new Set([...studentMathtm, ...studentHist]);
document.write("<h2>Задача 10</h2><br>");
document.write(`Відвідують історію, і математику: ${count}<br>`);
document.write(`Відвідують хоча б один гурток: ${studentsAll.size}<br>`);
