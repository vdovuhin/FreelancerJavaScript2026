// Назначаю переьеніе
let a = parseFloat(prompt("Відіть будласко число", 5));
let b = parseFloat(prompt("Відіть будласко число", 6));
let c = parseFloat(prompt("Відіть будласко число", 4));

//виконуемо вичисленія
let sum = a + 12 + b;
let sum1 = Math.sqrt((a+b)/ (2*a));
let sum2 = Math.cbrt((a + b) * c);
let sum3 = Math.sin(a / -b);

// виводим дани на екран
document.write(
		`	<ul>
    <li>S1 = ${sum}</li>
    <li>S2 = ${sum1}</li>
    <li>S3 = ${sum2}</li>
    <li>S4 = ${sum3}</li>
  </ul>
	`
)