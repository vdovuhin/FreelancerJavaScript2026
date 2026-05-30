/*
	===		Задача 1. 
	Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

			Тир	
		Поля(властивості)
		Масив, у якому зберігається поле з зайцями
		Методи (дії)
		Метод пострілу (задається позиція пострілу)
		Виведення ігрового поля
*/
// ==========================================
// 1. КЛАСС ДЛЯ РАБОТЫ С МАССИВОМ (ПОЛЕМ)
// ==========================================
class GameField {
  row;
  col;
  cells; 

  constructor(row, col, rabbitsCount) {
    this.row = row;
    this.col = col;
    this.cells = this.generateEmptyField();
    this.placeRabbits(rabbitsCount);
  }

  generateEmptyField() {
    return Array.from({ length: this.row }, () => Array(this.col).fill(0));
  }

  placeRabbits(rabbitsCount) {
    let placed = 0;
    while (placed < rabbitsCount) {
      let r = Math.floor(Math.random() * this.row);
      let c = Math.floor(Math.random() * this.col);
      
      if (this.cells[r][c] === 0) {
        this.cells[r][c] = 1;
        placed++;
      }
    }
  }
}

// ==========================================
// 2. КЛАСС ДЛЯ СУПЕРВИЗИИ ИГРЫ (ЛОГИКА)
// ==========================================
class ShootingGame {
  field;        
  rabbitsLeft;  

  constructor(row, col, rabbitsCount) {    
    this.field = new GameField(row, col, rabbitsCount);
    this.rabbitsLeft = rabbitsCount;
  }

  makeShot(userRow, userCol) {
    let r = userRow - 1;
    let c = userCol - 1;
    
    if (this.field.cells[r][c] === 1) {
      console.log('Ви влучили!');
      this.field.cells[r][c] = 0; 
      this.rabbitsLeft--;         
    } else {
      console.log('Промах!');
    }
  }

  print() {
    console.log(`Осталось зайцев: ${this.rabbitsLeft}`);
    console.table(this.field.cells); 
  }
}

// ==========================================
// ЗАПУСК ИГРЫ
// ==========================================
let game = new ShootingGame(4, 4, 3);

while (game.rabbitsLeft > 0) {
  game.print();
  
  let rowInput = prompt("Введіть рядок (1-4):");
	let colInput = prompt("Введіть стовпець (1-4):");
	
  if (rowInput === null || colInput === null) {
    console.log("Гру припинено.");
    break;
  }  
  game.makeShot(parseInt(rowInput), parseInt(colInput));
}

if (game.rabbitsLeft === 0) {
  console.log("Вітання! Ви перемогли! ");
}