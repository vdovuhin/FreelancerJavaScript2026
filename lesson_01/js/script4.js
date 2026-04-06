"use strict";
let length = parseFloat(prompt("Ведіть довжину у сантиметрах", 50));

let meter = length / 100;
let kilometr = meter / 1000;
document.write(`
		<p>
		Довжина в метрах - ${meter}
		</p>
		<p>
		Довжина в километрах - ${kilometr}
		</p>

	`);
