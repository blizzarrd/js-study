
class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class Circle {
	constructor(x, y, radius) {
		this.center = new Point(x, y)
		this.radius = radius
	}

	diameter() {
		return 2 * this.radius * Math.PI
	}
}

let c1 = new Circle(1, 2, 4.0)
let c2 = new Circle(1, 2, 8.0)

console.log(c1.diameter())
console.log(c2.diameter())
