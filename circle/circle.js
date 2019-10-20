
class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class Circle {
	constructor(center, radius) {
		this.center = center
		this.radius = radius
	}
}

let p = new Point(1, 2)
let c1 = new Circle(p, 4.0)
let c2 = new Circle(p, 8.0)

console.log(c1)
console.log(c2)
