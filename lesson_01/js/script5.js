"use strict";

let second = parseInt(prompt("Ведіть кільккісь сикунд ", 3600));

let day = Math.floor(second / 86400);
let hours = Math.floor((second % 86400) / 3600);
let minyt = Math.floor((second % 3600) / 60);
document.write(`
		время ${hours} : ${minyt}
	`);
