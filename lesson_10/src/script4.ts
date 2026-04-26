/*
	Морський бій. 
	Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
	Користувач стріляє вказуючи	координати. Гра продовжується поки не потоплено усі кораблі або
	у користувача не закінчаться снаряди.
*/

// 1. Функція створення поля
function getPlayField(rowNumber: number, colNumber: number): number[][] {
  return Array.from({ length: rowNumber }, () => new Array(colNumber).fill(0));
}

// 2. Функція розстановки кораблів
function getGameField(
  rowNumber: number,
  colNumber: number,
  shipNumber: number,
): number[][] {
  const emptyGameField = getPlayField(rowNumber, colNumber);
  
  for (let i = 0; i < shipNumber; ) {
    const rowIndex = Math.floor(Math.random() * rowNumber);
    const colIndex = Math.floor(Math.random() * colNumber);
    
    if (emptyGameField[rowIndex][colIndex] === 0) {
      emptyGameField[rowIndex][colIndex] = 1;
      i++; 
    }
  }
  return emptyGameField;
}

// 3. Головна функція гри
function gameNavaBattle(
  rowNumber: number,
  colNumber: number,
  shipNumber: number,
  missleNumber: number,
) {
    // Створюємо поле безпосередньо в грі
    const currentGameField = getGameField(rowNumber, colNumber, shipNumber);
    
    let leftShipsNumber = shipNumber;
    let leftMissileNumber = missleNumber;

    while (leftShipsNumber > 0 && leftMissileNumber > 0) {
      const userRowInput = prompt(`Введіть рядок (0-${rowNumber - 1}). Снарядів: ${leftMissileNumber}`, '0');
      const userColInput = prompt(`Введіть стовпець (0-${colNumber - 1})`, '0');

      // Перевірка на натискання кнопки "Скасувати"
      if (userRowInput === null || userColInput === null) break;

      const userRowIndex = parseInt(userRowInput);
      const userColIndex = parseInt(userColInput);

      // Перевірка влучання
      if (currentGameField[userRowIndex] && currentGameField[userRowIndex][userColIndex] === 1) {
        alert("Попав!");
        currentGameField[userRowIndex][userColIndex] = 0;
        leftShipsNumber--;
      } else {
        alert("Промазав");
      }

      leftMissileNumber--; // Зменшуємо саме ту змінну, що в умові while
    }

    if (leftShipsNumber === 0) alert('Перемога! Всі кораблі знищено!');
    else alert('Гра закінчена. Снаряди вичерпано.');
}

// Викликаємо гру (тепер всі параметри передаються коректно)
gameNavaBattle(6, 6, 5, 10);