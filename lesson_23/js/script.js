"use strict";
/*
    === Задача 1.
  Використовуючи один з АРІ та функцію fetch організувати завантаження та відображення даних
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1. Класс для создания и рендеринга элементов
class ElementBuilder {
    constructor(fact, count) {
        this.fact = fact;
        this.count = count + 1; // Учитываем 0-based индекс
        this.element = this.build(); // Переименовали метод для ясности
    }
    // Метод создает DOM-элементы
    build() {
        const div = document.createElement('div');
        div.classList.add('fact-card'); // Полезно добавить класс для стилизации
        const h2 = document.createElement('h2');
        h2.innerText = `Факт про котика № ${this.count}`;
        const text = document.createElement('p');
        text.innerText = this.fact;
        div.appendChild(h2);
        div.appendChild(text);
        return div;
    }
    // Метод вставляет элемент в контейнер
    renderElement(containerSelector = '.container') {
        const container = document.querySelector(containerSelector);
        if (container) {
            container.appendChild(this.element);
        }
        else {
            console.error(`Контейнер "${containerSelector}" не найден в DOM!`);
        }
    }
}
// 2. Класс для работы с API
class ApiRequest {
    constructor(url) {
        // Передавать URL в конструктор или метод гибче, чем жестко прописывать внутри
        this.url = url || "https://meowfacts.herokuapp.com/?lang=ukr&count=10";
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // fetch теперь внутри try...catch
                const response = yield fetch(this.url);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const data = yield response.json();
                return data.data; // API meowfacts возвращает объект { data: ["факт1", "факт2", ...] }
            }
            catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                throw error;
            }
        });
    }
}
// 3. Главная функция, которая связывает всё вместе (ТО, ЧЕГО НЕ ХВАТАЛО)
function initApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const api = new ApiRequest();
        try {
            // Получаем массив фактов
            const facts = yield api.fetchData();
            // Пробегаемся по массиву и отрисовываем каждый факт
            facts.forEach((factText, index) => {
                const card = new ElementBuilder(factText, index);
                card.renderElement('.container');
            });
        }
        catch (error) {
            // Отображаем ошибку пользователю, если что-то пошло не так
            const container = document.querySelector('.container');
            if (container) {
                container.innerHTML = '<p style="color: red;">Не удалось загрузить факты о котиках :(</p>';
            }
        }
    });
}
// Запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);
