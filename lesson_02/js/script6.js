"use strict";
const DayNumberString = prompt("Вводиться номер дня тижня", "3");
const DayNumber = DayNumberString ? parseInt(DayNumberString) : 3;
let day;
switch (DayNumber) {
    case 1:
        day = "Понеділок";
        break;
    case 2:
        day = "Вівторок";
        break;
    case 3:
        day = "Середа";
        break;
    case 4:
        day = "Четвер";
        break;
    case 5:
        day = "П'ятниця";
        break;
    case 6:
        day = "Субота";
        break;
    case 7:
        day = "Неділя";
        break;
    default:
        day = "невідома (введіть число від 1 до 7)";
        break;
}
document.write("Назва дня" + " " + `${day}`);
