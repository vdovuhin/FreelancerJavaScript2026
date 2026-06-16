/*
		=== Задача 2. 
	На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
*/

let element = document.querySelector(`.page__container`);


class NumberButton {
  DIV: HTMLDivElement;
  count: number;

  constructor() {   
    this.count = 0;
    this.DIV = document.createElement(`div`);
    this.DIV.innerText = `Кнопки: ${this.count}`;
    element!.append(this.DIV);
    
    const button = document.createElement("button");
    button.innerText = "Нажми меня";

   
    button.addEventListener('click', () => this.updateCLick(button));
    this.DIV.append(button);    
  }


  updateCLick(btn: HTMLButtonElement) {  
    this.count++;
    this.DIV.innerText = `Кнопки: ${this.count}`;
    this.DIV.append(btn);
  }
}

class NumberInput {
  P: HTMLParagraphElement; 
  count: number;

  constructor() {
    this.count = 0;
    this.P = document.createElement(`p`);
    this.P.innerText = `Инпуты: ${this.count}`;
    element!.append(this.P);

    const input = document.createElement("input");
    input.type = "text";
    input.value = "Кликни в меня";
    
    input.addEventListener('click', () => this.updateCLick(input));
    this.P.append(input);
  }

    updateCLick(input: HTMLInputElement) {  
    this.count++;
    this.P.innerText = `Инпуты: ${this.count}`; 
    this.P.append(input);
  }
}

// Запуск
let _Button = new NumberButton();
let _Input = new NumberInput();
