"use strict";
const ageString = prompt("Ведіть ваш возраст", "25");
const age = ageString ? parseInt(ageString) : 25;
let byWhom;
if (age <= 5) {
    byWhom = "дитиною у садочку";
}
else if (age <= 17) {
    byWhom = "школярем";
}
else if (age <= 24) {
    byWhom = "студентом";
}
else if (age <= 65) {
    byWhom = "працівником";
}
else {
    byWhom = "пенсіонером";
}
document.write("Ви относитесь" + " " + `${byWhom}`);
