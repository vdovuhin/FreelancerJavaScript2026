/*
 Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
номери днів, протягом яких кількість відвідувачів була меншою за 20;
номери днів, коли кількість відвідувачів була мінімальною;
номери днів, коли кількість відвідувачів була мінімальною;
загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних

*/
const week = [10, 20, 30, 5, 60, 120, 350];

let minDay = week[0];
let maxDay = week[0];
let working = 0;
let dayOff = 0;

function dayWeek(i: number) {
  let day;
  switch (i) {
    case 0:
      day = "Понеділок";
      break;
    case 1:
      day = "вівторок";
      break;
    case 2:
      day = "середа";
      break;
    case 3:
      day = "четверг";
      break;
    case 4:
      day = "П'ятниця";
      break;
    case 5:
      day = "Субота";
      break;
    case 6:
      day = "Неділя";
      break;
  }
  return document.write(`: ${day}<br>`);
}

for (let i = 0; i < week.length; i++) {
  if (week[i] < 20) {
    dayWeek(i);
  }
}
for (let i = 0; i < week.length; i++) {
  if (week[i] < minDay) {
    minDay = week[i];
    dayWeek(i);
  }
}
for (let i = 0; i < week.length; i++) {
  if (week[i] > maxDay) {
    maxDay = week[i];
    dayWeek(i);
  }
}

for (let i = 0; i < week.length; i++) {
  if (i < 5) {
    working += week[i];
  } else {
    dayOff += week[i];
  }
}

document.write(`загальну кількість клієнтів у робочі: ${working}<br>`);

document.write(`загальну кількість клієнтів у вихідної: ${dayOff}`);
