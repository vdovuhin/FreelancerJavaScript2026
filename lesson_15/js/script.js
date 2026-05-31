"use strict";
/*
            ===	Задача 1.
    Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
    Дата представляється структурою із трьома полями.
    Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. В
    ведення та виведення дати реалізувати за допомогою методу  toString.
*/
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TDate_day, _TDate_month, _TDate_year;
class TDate {
    constructor(day, month, year) {
        _TDate_day.set(this, void 0);
        _TDate_month.set(this, void 0);
        _TDate_year.set(this, void 0);
        this.Year = year;
        this.Month = month;
        this.Day = day;
    }
    // --- ГЕТТЕРИ ---
    get Day() {
        return __classPrivateFieldGet(this, _TDate_day, "f");
    }
    get Month() {
        return __classPrivateFieldGet(this, _TDate_month, "f");
    }
    get Year() {
        return __classPrivateFieldGet(this, _TDate_year, "f");
    }
    // --- СЕТТЕРИ ---
    set Year(value) {
        if (value < 1)
            throw new Error("Недійсне значення року");
        __classPrivateFieldSet(this, _TDate_year, value, "f");
    }
    set Month(value) {
        if (value < 1 || value > 12)
            throw new Error("Недійсне значення місяця");
        __classPrivateFieldSet(this, _TDate_month, value, "f");
    }
    set Day(value) {
        const maxDay = this.getMaxDay(__classPrivateFieldGet(this, _TDate_month, "f"), __classPrivateFieldGet(this, _TDate_year, "f"));
        if (value < 1 || value > maxDay) {
            throw new Error("Недійсне значення дня");
        }
        __classPrivateFieldSet(this, _TDate_day, value, "f");
    }
    // --- ТВІЙ МЕТОД ПЕРЕВІРКИ ДНІВ
    getMaxDay(month, year) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
                    ? 29
                    : 28;
            default:
                throw new Error("Недійсне значення місяця");
        }
    }
    // Додатковий метод, щоб перетворити число місяця на красиве слово
    getMonthName(month) {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return months[month - 1];
    }
    toString() {
        return `${this.Day} ${this.getMonthName(this.Month)} ${this.Year}`;
    }
}
_TDate_day = new WeakMap(), _TDate_month = new WeakMap(), _TDate_year = new WeakMap();
const date = new TDate(15, 8, 2026);
document.write(`date : ${date.toString()} <br>`); // Output: 15.8.2026
