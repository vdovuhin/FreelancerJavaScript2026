//Вивести на екран номери місяців весни і літа (від 3 до 8)

if (confirm("Почати тестування?")) {
	for (let i = 3; i < 8; i++) {
		let month;
    if (i < 6) month = "весни";
    else month = "літа";

    document.write(
      `<div class="text">номери місяців ${month} : ${i}</div>`,
    );
  }
}
