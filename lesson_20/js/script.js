"use strict";
/*
            ===	Задача 1.
    Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули)
    та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку
    (якщо оцінка погана і це не останній місяць у семестрі). Обробку усіх помилок зробити з використанням відповідних класів.
*/
class FormError {
    constructor() {
        const elementError = document.createElement("div");
        this.errorElement = elementError;
        elementError.classList.add("form__error");
        elementError.style.color = "red";
        elementError.style.fontSize = "14px";
        const container = document.querySelector(".page__container");
        if (container) {
            container.append(elementError);
        }
    }
    show(message) {
        this.errorElement.textContent = message;
        this.errorElement.style.display = "block";
    }
    clear() {
        this.errorElement.textContent = "";
        this.errorElement.style.display = "none";
    }
}
class Form {
    constructor(title) {
        this.inputElement = null;
        this.createInput(title);
        this.errorHandler = new FormError;
    }
    createInput(title) {
        const elementInput = document.createElement("input");
        this.inputElement = elementInput;
        elementInput.placeholder = title;
        elementInput.classList.add("form__input");
        const container = document.querySelector(".page__container");
        if (container) {
            container.append(this.inputElement);
        }
    }
}
class MonthForm extends Form {
    constructor(title) {
        super(title);
    }
    validate() {
        if (this.inputElement) {
            this.errorHandler.clear();
            const monthValue = this.inputElement.value.trim();
            const monthNumber = Number(monthValue);
            if (monthValue === "" || isNaN(monthNumber)) {
                this.errorHandler.show("Введене значення не є числом");
                return false;
            }
            if (monthNumber < 1 || monthNumber > 12) {
                this.errorHandler.show("Введіть номер місяця від 1 до 12");
                return false;
            }
            if (monthNumber >= 6 && monthNumber <= 8) {
                this.errorHandler.show("Ви не можете виправити оцінку під час канікул");
                return false;
            }
            return true;
        }
    }
}
class ScoreForm extends Form {
    constructor(title) {
        super(title);
    }
    validate() {
        if (this.inputElement) {
            this.errorHandler.clear();
            const scoreValue = this.inputElement.value.trim();
            const scoreNumber = Number(scoreValue);
            if (scoreValue === "" || isNaN(scoreNumber)) {
                this.errorHandler.show("Введене значення не є числом");
                return false;
            }
            if (scoreNumber < 1 || scoreNumber > 100) {
                this.errorHandler.show("Введіть оцінку від 1 до 100");
                return false;
            }
            return true;
        }
    }
}
class App {
    constructor() {
        this.monthForm = new MonthForm("Введіть місяць навчання");
        this.scoreForm = new ScoreForm("Введіть оцінку учня");
        this.createSubmitButton();
    }
    createSubmitButton() {
        const button = document.createElement("button");
        button.textContent = "Перевірити";
        button.classList.add("page__button");
        button.addEventListener("click", () => {
            this.handleSubmit();
        });
        const container = document.querySelector(".page__container");
        if (container) {
            container.append(button);
        }
    }
    handleSubmit() {
        const oldResultDiv = document.querySelector(".form__result");
        if (oldResultDiv) {
            oldResultDiv.remove();
        }
        const monthResult = this.monthForm.validate();
        const scoreResult = this.scoreForm.validate();
        if (monthResult == true && scoreResult == true) {
            const monthDiv = document.createElement("div");
            monthDiv.classList.add("form__result");
            monthDiv.textContent = "Ви можете виправити оцінку";
            const container = document.querySelector(".page__container");
            if (container) {
                container.append(monthDiv);
            }
        }
    }
}
new App();
