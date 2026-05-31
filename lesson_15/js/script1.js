"use strict";
/*
        === Задача 3.
    Об’єкт “Фірма” (використати члени-класи)
    поля
        назва фірми;
        дата заснування (рік, місяць);
        послуги (назва послуги, вартість, термін виконання);
        адреси філіалів (країна, місто, вулиця, номер будинку);
    методи
        визначення кількості років існування фірми;
        виведення всіх філіалів фірми у вказаному місті;
        виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
*/
class FondDate {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }
}
class Services {
    constructor(name, cost, duration) {
        this.name = name;
        this.cost = cost;
        this.duration = duration;
    }
}
class Branches {
    constructor(country, city, street, buildingNumber) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.buildingNumber = buildingNumber;
    }
}
class Firm {
    constructor(name, foundationDate, services, branches) {
        this.name = name;
        this.foundationDate = foundationDate;
        this.services = services;
        this.branches = branches;
    }
    getYearsOfExistence() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.foundationDate.year;
    }
    getBranchesInCity(city) {
        return this.branches.filter((branch) => branch.city.toLowerCase() === city.toLowerCase());
    }
    getServicesByCostAndDuration(cost, duration) {
        return this.services.filter((service) => service.cost <= cost && service.duration <= duration);
    }
    toString() {
        return `Фірма: "${this.name}", Існує років: ${this.getYearsOfExistence()}. Філіалів: ${this.branches.length}, Послуг: ${this.services.length}`;
    }
}
const firm = new Firm("Tech Solutions", new FondDate(2010, 5), // Передаємо об'єкт класу FoundationDate
[
    new Services("Web Development", 5000, 30), // Передаємо об'єкти класу Service
    new Services("Mobile App Development", 8000, 45),
    new Services("SEO Optimization", 2000, 15),
], [
    new Branches("USA", "New York", "5th Avenue", 123), // Передаємо об'єкти класу Branch
    new Branches("USA", "Los Angeles", "Sunset Boulevard", 456),
    new Branches("UK", "London", "Baker Street", 789),
]);
console.log(firm.toString());
document.write(`${firm.toString()}<br>`);
