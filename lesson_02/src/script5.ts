const DriverCategory = prompt("Ведіть вашу категорію", 'В');
let vehicle;
switch (DriverCategory) {
  case "A":
    vehicle = "мотоциклом";
    break;
  case "В":
    vehicle = "легковий аавтомобілем";
    break;
  case "C":
    vehicle = "вантажний автомобілем";
    break;
	default:
		vehicle = "невідома (введіть число від A до C)";
		break;	
}
document.write("Ви можите керувать транспортного засобу" + " " + `${vehicle}`);
	
	
