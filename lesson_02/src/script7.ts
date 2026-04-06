const MonthNumberString = prompt("Вводиться номер мисяца", "3");
const MonthNumber = MonthNumberString ? parseInt(MonthNumberString) : 3;
let season;
switch (MonthNumber) {
  case 1:
  case 2:
  case 12:
    season = "Зіма";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;

  default:
    season = "невідома (введіть число від 1 до 12)";
    break;
}
document.write("Назва пори року" + " " + `${season}`);
