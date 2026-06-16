/*
			===	Задача 1. 
 		Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. 
		При кліку на танк він вибухає і зникає з екрану. 
*/

let el = document.getElementById("game-field") as HTMLElement;

class Tank {
	elementHTML: HTMLDivElement;
	top: number;
	timer: number;
  constructor() {
    this.elementHTML = document.createElement("div");
    this.elementHTML.classList.add("tank");

    el.append(this.elementHTML);   
		let elWidth = el.clientWidth;
		let tankWidth = this.elementHTML.clientWidth;
		let maxLeft = elWidth - tankWidth;
		let leftRandon = this.getRandom(0, maxLeft);
		this.elementHTML.style.left = leftRandon + 'px';
		this.elementHTML.addEventListener(`click`, () =>{
			clearInterval(this.timer);
			this.elementHTML.remove();
		}  )
		this.top = 0;
		
		this.timer = setInterval(() =>{
			this.move();
		}, 40)
		
  }
  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

	move(){
		this.top += 2;
		this.elementHTML.style.top = this.top + 'px';
		if (this.top >= el.clientHeight){
				clearInterval(this.timer);     
				this.elementHTML.remove();
				alert("Поражение!");
			}
		}	
}

setInterval(() => {
	 new Tank();
}, 2000);

