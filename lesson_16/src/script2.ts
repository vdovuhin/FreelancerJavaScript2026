/*
	=== Задача 3 ===
	Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
	програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. 
	Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів.
	Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
*/
class MyReminder {
		private static instance:  MyReminder | null = null	
		private timerId: number | null = null
		private count: number = 0
		private message: string		
		private constructor(message: string, seconds: number) {
			this.message = message
			this.timerId = window.setInterval(() => {
				this.count++
				console.log(`${this.message} - Нагадування номер ${this.count}`)
			}, seconds * 1000)
		}	
		public static create(message: string, seconds: number): MyReminder {
			if (MyReminder.instance) {
				throw new Error("Неможливо створити більше одного об'єкта-нагадувача.")
			}	

			MyReminder.instance = new MyReminder(message, seconds)
			return MyReminder.instance
		}		
		public stop() {
			if (this.timerId !== null) {
				clearInterval(this.timerId)
				this.timerId = null
				MyReminder.instance = null
				console.log("Нагадувач зупинено.")
			}
		}		
		public updateMessage(newMessage: string) {
			this.message = newMessage
			console.log("Повідомлення оновлено.")
		}
	}
// Приклад використання:
const text: string  = prompt("Введіть нагадування:")!
const seconds: number = Number(prompt("Через скільки секунд повторювати?"))
let reminder: MyReminder
try {
	if (text && seconds > 0) {
	 reminder= MyReminder.create(text, seconds)
}
} catch (error) {
	console.error(error.message);
}
setTimeout(() => {
	if (reminder){
		reminder.stop()
	} 
	else {
		console.log("Немає активного нагадувача для зупинки.")
	}
}, 10000)
