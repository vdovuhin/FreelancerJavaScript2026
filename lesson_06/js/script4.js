"use strict";
/*
    Створити функцію, яка випадковим чином виводить
    на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
*/
let romdomImage = Math.floor(Math.random() * 4) + 1;
function showImage(a) {
    let img;
    switch (a) {
        case 1:
            img = "img1.jpg";
            break;
        case 2:
            img = "img2.jpg";
            break;
        case 3:
            img = "img3.jpg";
            break;
        case 4:
            img = "img4.jpg";
            break;
    }
    return img;
}
document.write(`<img src="./img/${showImage(romdomImage)}"alt="Image ${romdomImage}">`);
