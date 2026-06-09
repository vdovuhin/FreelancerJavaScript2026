/*
			===	Задача 1. 
 	Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
*/

const DIVLIST = document.querySelectorAll('.page__body div');



for (const DIV of DIVLIST) {
  DIV.addEventListener("click", function (this: HTMLElement) {    
    let nexElement = this.nextElementSibling as HTMLElement | null;
    ColrElement(nexElement);
  });
};

function ColrElement(nexElement: HTMLElement | null) {
  while (nexElement) {
    nexElement.style.color = 'red';    
    nexElement = nexElement.nextElementSibling as HTMLElement | null;
	};
};