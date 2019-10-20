let list = []

class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

for(let i = 0; i < 10; i += 1) {
	let x = i
	let y = fibonacci(i)
	let a = new Point(x, y)
	list.push(a)
}

console.log(list)

function fibonacci(x) {
	if(x <= 1) {
		return 1
	}

	return fibonacci(x-1) + fibonacci(x-2)
}