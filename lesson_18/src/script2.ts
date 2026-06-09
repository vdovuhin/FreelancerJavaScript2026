/*
			=== Задача 3 ===
	Дано 5 випадковим чином згенерованих нумерованих списків 
	з рандомними числами (кількість елементів у списку випадкова 
	від 1 до 10, елементи випадкові – від 1 до 100). При натисненні 
	на кнопку нумеровані списки з парною кількістю елементів зафарбувати 
*/

const btn = document.querySelector('.page__button')!;
const content = document.querySelector('.page__content')!;

function getRandom (min:number, max:number) {
	let randon = Math.floor(Math.random() * (max - min + 1)+ min);
	return randon;
}

for (let i = 0; i < 5; i++) {
	let ol = document.createElement('ol');
	let randomElement = getRandom(1, 10);

	for (let j = 0; j < randomElement; j++){
		let li = document.createElement('li');
		let element = getRandom(1, 100);
		li.textContent = String(element);
		ol.append(li);		
	}
	content.append(ol)
}

btn.addEventListener('click', function(){
	const list = content.querySelectorAll('ol');
	for (let currentList of list) {
		let itemsCount =currentList.children.length;
		if (itemsCount % 2 === 0){
			currentList.style.color = 'green';
		}
		else{
			currentList.style.color = 'red';
		}
	}

})